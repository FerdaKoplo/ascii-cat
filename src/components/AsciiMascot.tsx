import { useEffect, useRef } from "react";
import { rotateXAxis, rotateYAxis } from "../libs/rotation.lib";
import { render3D } from "../libs/camera.lib";
import { calculateNormal, fillTriangle } from "../libs/calculate.lib";
import { getShadeChar } from "../libs/lighting.lib";
import { dotProduct, normalize, type Vec3 } from "../libs/skeleton.lib";
import { punkHeadMeshes, punkHeadVertices } from "../constants/mascot.constant";

const SCREEN_WIDTH = 100;
const SCREEN_HEIGHT = 60;

const AsciiMascot = () => {
  const preRef = useRef<HTMLPreElement>(null);

  const isDragging = useRef(false);
  const prevMouse = useRef({ x: 0, y: 0 });
  const targetRot = useRef({ yaw: 0, pitch: 0 });
  const currentRot = useRef({ yaw: 0, pitch: 0 });

  const idleTime = useRef(0);
  const lastInteractTime = useRef(0);
  const resetYaw = useRef(0);

  useEffect(() => {
    let animationFrameId = 0;

    const render = () => {
      const now = Date.now();

      if (!isDragging.current && now - lastInteractTime.current > 500) {
        if (idleTime.current === 0) {
          resetYaw.current =
            Math.round(targetRot.current.yaw / (Math.PI * 2)) * (Math.PI * 2);
          idleTime.current = 0.0001;
        }

        const distYaw = Math.abs(targetRot.current.yaw - resetYaw.current);
        const distPitch = Math.abs(targetRot.current.pitch);

        if (
          idleTime.current === 0.0001 &&
          (distYaw > 0.05 || distPitch > 0.05)
        ) {
          targetRot.current.yaw +=
            (resetYaw.current - targetRot.current.yaw) * 0.15;
          targetRot.current.pitch += (0 - targetRot.current.pitch) * 0.15;
        } else {
          idleTime.current += 0.02;
          targetRot.current.yaw =
            resetYaw.current + (idleTime.current - 0.0001);
          targetRot.current.pitch =
            Math.sin((idleTime.current - 0.0001) * 1.5) * 0.2;
        }
      }

      currentRot.current.yaw +=
        (targetRot.current.yaw - currentRot.current.yaw) * 0.15;
      currentRot.current.pitch +=
        (targetRot.current.pitch - currentRot.current.pitch) * 0.15;

      const yaw = currentRot.current.yaw;
      const pitch = currentRot.current.pitch;

      const screen = new Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill(" ");
      const zBuffer = new Float32Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill(
        Infinity,
      );
      const colorBuffer = new Array(SCREEN_WIDTH * SCREEN_HEIGHT).fill("#fff");

      const LIGHT_DIR: Vec3 = [0.5, -0.5, -1];

      punkHeadMeshes.forEach((meshGroup) => {
        meshGroup.faces.forEach((face) => {
          const v0 = punkHeadVertices[face[0]];
          const v1 = punkHeadVertices[face[1]];
          const v2 = punkHeadVertices[face[2]];

          if (!v0 || !v1 || !v2) {
            console.error(`Missing vertex in mesh: ${meshGroup.name}`, face);
            return;
          }

          const r0 = rotateYAxis(rotateXAxis(v0, pitch), yaw);
          const r1 = rotateYAxis(rotateXAxis(v1, pitch), yaw);
          const r2 = rotateYAxis(rotateXAxis(v2, pitch), yaw);

          const normal = calculateNormal(r0, r1, r2);
          const nFace = normalize(normal);
          const nLight = normalize(LIGHT_DIR);
          const brightness = Math.abs(dotProduct(nFace, nLight));

          const char =
            meshGroup.char !== undefined
              ? meshGroup.char
              : getShadeChar(brightness);

          const p0 = render3D(r0[0], r0[1], r0[2], SCREEN_WIDTH, SCREEN_HEIGHT);
          const p1 = render3D(r1[0], r1[1], r1[2], SCREEN_WIDTH, SCREEN_HEIGHT);
          const p2 = render3D(r2[0], r2[1], r2[2], SCREEN_WIDTH, SCREEN_HEIGHT);

          fillTriangle(
            p0,
            p1,
            p2,
            char,
            meshGroup.color,
            screen,
            zBuffer,
            colorBuffer,
            SCREEN_WIDTH,
            SCREEN_HEIGHT,
          );
        });
      });

      if (preRef.current) {
        let output = "";
        for (let y = 0; y < SCREEN_HEIGHT; y++) {
          output +=
            screen.slice(y * SCREEN_WIDTH, (y + 1) * SCREEN_WIDTH).join("") +
            "\n";
        }
        preRef.current.textContent = output;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    prevMouse.current = { x: e.clientX, y: e.clientY };
    idleTime.current = 0;
    lastInteractTime.current = Date.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - prevMouse.current.x;
    const deltaY = e.clientY - prevMouse.current.y;

    targetRot.current.yaw += deltaX * 0.015;
    targetRot.current.pitch += deltaY * 0.015;

    targetRot.current.pitch = Math.max(
      -Math.PI / 2.5,
      Math.min(Math.PI / 2.5, targetRot.current.pitch),
    );

    prevMouse.current = { x: e.clientX, y: e.clientY };
    lastInteractTime.current = Date.now();
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  return (
    <pre
      ref={preRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="font-mono text-[10px] leading-[10px] tracking-tight font-bold text-slate-800 cursor-grab active:cursor-grabbing touch-none select-none"
    />
  );
};

export default AsciiMascot;
