import { useEffect, useRef } from "react";
import { render3D } from "../../libs/camera.lib";

const WIDTH = 300;
const HEIGHT = 60;

const Floor = () => {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const gridSize = WIDTH * HEIGHT;
    const grid = new Array<string>(gridSize);
    const zBuffer = new Float32Array(gridSize);

    let frameCount = 0;

    const drawPoint = (x: number, y: number, z: number, char: string) => {
      const [screenX, screenY, adjustedZ] = render3D(x, y, z, WIDTH, HEIGHT);

      if (
        screenX >= 0 &&
        screenX < WIDTH &&
        screenY >= 0 &&
        screenY < HEIGHT &&
        adjustedZ > 0
      ) {
        const idx = screenY * WIDTH + screenX;
        if (adjustedZ < zBuffer[idx]) {
          zBuffer[idx] = adjustedZ;
          grid[idx] = char;
        }
      }
    };

    const drawHorizontalLine = (
      y: number,
      z: number,
      char: string,
      spread: number,
    ) => {
      const [startX, screenY, adjustedZ] = render3D(
        -spread,
        y,
        z,
        WIDTH,
        HEIGHT,
      );
      const [endX] = render3D(spread, y, z, WIDTH, HEIGHT);

      if (screenY >= 0 && screenY < HEIGHT && adjustedZ > 0) {
        const x1 = Math.max(0, startX);
        const x2 = Math.min(WIDTH - 1, endX);

        for (let px = x1; px <= x2; px++) {
          const idx = screenY * WIDTH + px;
          if (adjustedZ < zBuffer[idx]) {
            zBuffer[idx] = adjustedZ;
            grid[idx] = char;
          }
        }
      }
    };

    const loop = () => {
      frameCount += 0.3;

      grid.fill(" ");
      zBuffer.fill(9999);

      const FLOOR_Y = -6;
      const TILE_SIZE = 8;
      const FAR_Z = 160;
      const SPREAD_X = 150;

      for (let x = -SPREAD_X; x <= SPREAD_X; x += TILE_SIZE) {
        for (let z = 0; z <= FAR_Z; z += 0.25) {
          const char = z > 100 ? "." : z > 50 ? ":" : "|";
          drawPoint(x, FLOOR_Y, z, char);
        }
      }

      const offsetZ = frameCount % TILE_SIZE;
      for (let zBase = 0; zBase <= FAR_Z + TILE_SIZE; zBase += TILE_SIZE) {
        const z = zBase - offsetZ;
        if (z < 0) continue;

        const char = z > 100 ? "." : "-";

        drawHorizontalLine(FLOOR_Y, z, char, SPREAD_X);

        for (let x = -SPREAD_X; x <= SPREAD_X; x += TILE_SIZE) {
          drawPoint(x, FLOOR_Y, z, "+");
        }
      }

      if (preRef.current) {
        let output = "";
        for (let y = 0; y < HEIGHT; y++) {
          output += grid.slice(y * WIDTH, (y + 1) * WIDTH).join("") + "\n";
        }
        preRef.current.textContent = output;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex items-end justify-center">
      <pre
        ref={preRef}
        className="font-mono text-[10px] leading-[10px] text-slate-800 font-bold"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 60%, black 10%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 60%, black 10%, transparent 80%)",
        }}
      />
    </div>
  );
};

export default Floor;
