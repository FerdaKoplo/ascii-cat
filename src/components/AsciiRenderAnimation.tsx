import React, { useEffect, useRef } from "react";
import {
  dotProduct,
  normalize,
  type Face,
  type Vec3,
} from "../libs/skeleton.lib";
import { render3D, rotateYAxis } from "../libs/camera.lib";
import { calculateNormal, fillTriangle } from "../libs/calculate.lib";
import {
  sekubanGirlMeshes,
  sekubanGirlVertices,
} from "../constants/sekuban-girl.constant";

const SCREEN_WIDTH = 70;
const SCREEN_HEIGHT = 60;

const AsciiRenderAnimation: React.FC = () => {
  const preRef = useRef<HTMLPreElement>(null);

  const keysPressed = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        [
          "w",
          "a",
          "s",
          "d",
          "arrowup",
          "arrowleft",
          "arrowdown",
          "arrowright",
        ].includes(key)
      ) {
        keysPressed.current[key] = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        [
          "w",
          "a",
          "s",
          "d",
          "arrowup",
          "arrowleft",
          "arrowdown",
          "arrowright",
        ].includes(key)
      ) {
        keysPressed.current[key] = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    let angle = 0;
    let walkCycle = 0;
    let posX = 0;
    let posZ = 0;
    let animationFrameId = 0;

    const render = () => {
      const screen = new Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill(" ");
      const zBuffer = new Float32Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill(
        Infinity,
      );
      const LIGHT_DIR: Vec3 = [0, 0, -1];
      const colorBuffer = new Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill("#0f0");

      // Check WASD Input state
      const k = keysPressed.current;
      const isMoving =
        k["w"] ||
        k["s"] ||
        k["a"] ||
        k["d"] ||
        k["arrowup"] ||
        k["arrowdown"] ||
        k["arrowleft"] ||
        k["arrowright"];

      let moveDx = 0;
      let moveDz = 0;
      const moveSpeed = 0.04;

      if (k["w"] || k["arrowup"]) moveDz += moveSpeed;
      if (k["s"] || k["arrowdown"]) moveDz -= moveSpeed;
      if (k["a"] || k["arrowleft"]) moveDx -= moveSpeed;
      if (k["d"] || k["arrowright"]) moveDx += moveSpeed;

      posX += moveDx;
      posZ += moveDz;

      if (isMoving) {
        walkCycle += 0.16; // Walk animation cycle speed
        angle += moveDx * 0.4; // Turn slightly toward horizontal movement
      } else {
        // Slow subtle idle breathing when standing still
        walkCycle += 0.03;
      }

      // Transform and Animate Vertices Frame-by-Frame
      const animatedVertices = sekubanGirlVertices.map((v) => {
        let [x, y, z] = [...v];

        const breath = Math.sin(walkCycle * 0.8) * 0.025;
        const isLowerBody = y < -1.75;
        const isArmOrHand = Math.abs(x) > 1.0 && y > -1.5 && y < 0.6;
        const isTorso = y >= -1.75 && y <= 0.8;

        if (isMoving) {
          // --- WALKING ANIMATION ---
          if (isLowerBody) {
            // Alternate legs (Left vs Right based on X sign)
            const legSign = x < 0 ? 1 : -1;
            const stride = Math.sin(walkCycle) * 0.38 * legSign;
            y += Math.abs(stride) * 0.12; // Knee lift bounce
            z += stride;
          } else if (isArmOrHand) {
            // Natural opposite arm swing
            const armSign = x < 0 ? 1 : -1;
            z -= Math.sin(walkCycle) * 0.28 * armSign;
          } else if (isTorso) {
            // Weight-shift bob & side sway
            y += Math.abs(Math.sin(walkCycle * 2)) * 0.05;
            x += Math.sin(walkCycle) * 0.035;
          }
        } else {
          // --- IDLE BREATHING ANIMATION ---
          if (isTorso) {
            y += breath;
            z += breath * 0.4;
          }
        }

        // Apply Y-axis rotation and world position offset
        const rotated = rotateYAxis([x, y, z], angle);
        return [rotated[0] + posX, rotated[1], rotated[2] + posZ] as Vec3;
      });

      sekubanGirlMeshes.forEach((meshGroup) => {
        meshGroup.faces.forEach((face: Face) => {
          const v0 = animatedVertices[face[0]];
          const v1 = animatedVertices[face[1]];
          const v2 = animatedVertices[face[2]];

          if (!v0 || !v1 || !v2) return;

          const normal = calculateNormal(v0, v1, v2);
          const nFace = normalize(normal);
          const nLight = normalize(LIGHT_DIR);
          const brightness = Math.abs(dotProduct(nFace, nLight));

          const char = meshGroup.char
            ? meshGroup.char
            : brightness > 0.45
              ? "@"
              : "#";
          const color = meshGroup.color;

          const p0 = render3D(v0[0], v0[1], v0[2], SCREEN_WIDTH, SCREEN_HEIGHT);
          const p1 = render3D(v1[0], v1[1], v1[2], SCREEN_WIDTH, SCREEN_HEIGHT);
          const p2 = render3D(v2[0], v2[1], v2[2], SCREEN_WIDTH, SCREEN_HEIGHT);

          fillTriangle(
            p0,
            p1,
            p2,
            char,
            color,
            screen,
            zBuffer,
            colorBuffer,
            SCREEN_WIDTH,
            SCREEN_HEIGHT,
          );
        });
      });

      let htmlString = "";
      let activeColor = "";

      for (let i = 0; i < SCREEN_WIDTH * SCREEN_HEIGHT; i++) {
        if (i > 0 && i % SCREEN_WIDTH === 0) {
          htmlString += "\n";
        }

        const char = screen[i];
        const pixelColor = colorBuffer[i];

        if (pixelColor !== activeColor) {
          if (activeColor !== "") {
            htmlString += "</span>";
          }
          htmlString += `<span style="color: ${pixelColor}">`;
          activeColor = pixelColor;
        }

        htmlString += char;
      }

      if (activeColor !== "") {
        htmlString += "</span>";
      }

      if (preRef.current) {
        preRef.current.innerHTML = htmlString;
      }

      if (!isMoving) {
        angle += 0.015; // Slow ambient spin when standing still
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#000",
        padding: "10px",
      }}
    >
      <div
        style={{
          color: "#a1a1aa",
          fontFamily: "monospace",
          fontSize: "12px",
          marginBottom: "8px",
        }}
      >
        Sukeban Animation — Use{" "}
        <span style={{ color: "#f43f5e", fontWeight: "bold" }}>W A S D</span> to
        walk!
      </div>
      <pre
        ref={preRef}
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "10px",
          lineHeight: "10px",
          margin: 0,
          backgroundColor: "#05050a",
          overflow: "hidden",
          border: "1px solid #27272a",
          borderRadius: "6px",
          padding: "10px",
        }}
      />
    </div>
  );
};

export default AsciiRenderAnimation;
