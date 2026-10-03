import { useEffect, useRef } from "react";
import {
  catVertices,
  dotProduct,
  girlVertices,
  normalize,
  type Face,
  type Vec3,
} from "../libs/skeleton.lib";
import { render3D, rotateYAxis } from "../libs/camera.lib";
import { calculateNormal, fillTriangle } from "../libs/calculate.lib";
import { getShadeChar } from "../libs/lighting.lib";
import { girlMeshes } from "../constants/girl-punk.constant";
import { catMeshes } from "../constants/blooby-cat.constant";

interface AsciiRenderMainProps {
  activeChar: "girl" | "cat";
}

const SCREEN_WIDTH = 70;
const SCREEN_HEIGHT = 60;

const AsciiRenderMain: React.FC<AsciiRenderMainProps> = ({ activeChar }) => {
  const preRef = useRef<HTMLPreElement>(null);

  const currentVertices = activeChar === "girl" ? girlVertices : catVertices;
  const currentMeshes = activeChar === "girl" ? girlMeshes : catMeshes;

  useEffect(() => {
    let angle = 0;
    let animationFrameId = 0;

    const render = () => {
      const screen = new Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill(" ");
      const zBuffer = new Float32Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill(
        Infinity,
      );
      const LIGHT_DIR: Vec3 = [0, 0, -1];
      const colorBuffer = new Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill("#0f0");
      currentMeshes.forEach((meshGroup) => {
        meshGroup.faces.forEach((face: Face) => {
          const v0 = currentVertices[face[0]];
          const v1 = currentVertices[face[1]];
          const v2 = currentVertices[face[2]];

          const r0 = rotateYAxis(v0, angle);
          const r1 = rotateYAxis(v1, angle);
          const r2 = rotateYAxis(v2, angle);

          const normal = calculateNormal(r0, r1, r2);
          const nFace = normalize(normal);
          const nLight = normalize(LIGHT_DIR);
          const brightness = Math.abs(dotProduct(nFace, nLight));

          const char = meshGroup.char
            ? meshGroup.char
            : getShadeChar(brightness);
          const color = meshGroup.color;

          const p0 = render3D(r0[0], r0[1], r0[2], SCREEN_WIDTH, SCREEN_HEIGHT);
          const p1 = render3D(r1[0], r1[1], r1[2], SCREEN_WIDTH, SCREEN_HEIGHT);
          const p2 = render3D(r2[0], r2[1], r2[2], SCREEN_WIDTH, SCREEN_HEIGHT);

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

      // slice one dimensional array into printable row
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

      angle += 0.03;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentVertices, currentMeshes]);

  return (
    <pre
      ref={preRef}
      style={{
        fontFamily: "monospace",
        fontSize: "12px",
        lineHeight: "12px",
        margin: 0,
      }}
    />
  );
};

export default AsciiRenderMain;
