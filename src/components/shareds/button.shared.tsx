import { useEffect, useRef } from "react";
import { render3D } from "../../libs/camera.lib";
import { Link } from "react-router";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

const WIDTH = 120;
const HEIGHT = 12;

const Button: React.FC<ButtonProps> = ({ to, children }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    let animationFrameId: number;
    const gridSize = WIDTH * HEIGHT;
    const grid = new Array<string>(gridSize);
    const zBuffer = new Float32Array(gridSize);

    let frameCount = 0;
    let currentSpeed = 0.2;

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
      const targetSpeed = isHovered.current ? 3.0 : 0.2;
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;
      frameCount += currentSpeed;

      grid.fill(" ");
      zBuffer.fill(9999);

      const TILE_SIZE = 6;
      const FAR_Z = 80;
      const SPREAD_X = 60;

      // 2. Brought mathematically closer to the camera center (0) so it fits in the 12-row grid
      const FLOOR_Y = -1.5;
      const CEIL_Y = 1.5;

      const offsetZ = frameCount % TILE_SIZE;
      for (let zBase = 0; zBase <= FAR_Z + TILE_SIZE; zBase += TILE_SIZE) {
        const z = zBase - offsetZ;
        if (z < 0) continue;

        const char = currentSpeed > 1.5 ? "=" : z > 40 ? "." : "-";

        drawHorizontalLine(FLOOR_Y, z, char, SPREAD_X);
        drawHorizontalLine(CEIL_Y, z, char, SPREAD_X);

        for (let x = -SPREAD_X; x <= SPREAD_X; x += TILE_SIZE) {
          drawPoint(x, FLOOR_Y, z, "+");
          drawPoint(x, CEIL_Y, z, "+");
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
    <Link
      to={to}
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
      className="relative block w-full h-32 bg-white border-2 border-slate-900 rounded-lg overflow-hidden group cursor-pointer transition-colors hover:bg-slate-50"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300">
        <pre
          ref={preRef}
          className="font-mono text-[10px] leading-[10px] text-slate-800 font-bold"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 50%, black 20%, transparent 80%)",
          }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase [-webkit-text-stroke:1px_#0f172a] text-transparent relative z-10 group-hover:scale-110 group-hover:tracking-widest transition-all duration-500 ease-out">
          {children}
        </h1>

        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 uppercase z-20 w-full text-center group-hover:scale-110 group-hover:tracking-widest transition-all duration-500 ease-out">
          {children}
        </h1>
      </div>
    </Link>
  );
};

export default Button;
