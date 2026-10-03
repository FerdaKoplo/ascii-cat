import { useEffect, useRef, useState } from "react";
import { render3D } from "../../libs/camera.lib";
import { getShadeChar } from "../../libs/lighting.lib";

interface Option {
  id: string;
  label: string;
}

interface AsciiCurveSliderProps {
  options: Option[];
  activeId: string;
  onChange: (id: string) => void;
}

const WIDTH = 64;
const HEIGHT = 24;
const RADIUS = 4.5;

const Slider: React.FC<AsciiCurveSliderProps> = ({
  options,
  activeId,
  onChange,
}) => {
  const activeIndex = options.findIndex((o) => o.id === activeId);
  const [dragDir, setDragDir] = useState<"left" | "right" | null>(null);

  const preRef = useRef<HTMLPreElement>(null);
  const visualIndexRef = useRef(activeIndex);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const gridSize = WIDTH * HEIGHT;
    const grid = new Array<string>(gridSize);
    const zBuffer = new Float32Array(gridSize);

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

    const drawString = (str: string, cx: number, cy: number, cz: number) => {
      const [screenX, screenY, adjustedZ] = render3D(cx, cy, cz, WIDTH, HEIGHT);
      const startX = screenX - Math.floor(str.length / 2);

      for (let i = 0; i < str.length; i++) {
        const px = startX + i;
        if (
          px >= 0 &&
          px < WIDTH &&
          screenY >= 0 &&
          screenY < HEIGHT &&
          adjustedZ > 0
        ) {
          const idx = screenY * WIDTH + px;
          if (adjustedZ <= zBuffer[idx]) {
            zBuffer[idx] = adjustedZ;
            grid[idx] = str[i];
          }
        }
      }
    };

    const loop = () => {
      visualIndexRef.current += (activeIndex - visualIndexRef.current) * 0.15;
      const vIndex = visualIndexRef.current;

      grid.fill(" ");
      zBuffer.fill(9999);

      for (let a = 0; a < Math.PI * 2; a += 0.08) {
        const x = Math.sin(a + vIndex) * RADIUS;
        const z = -Math.cos(a + vIndex) * RADIUS;
        const brightness = Math.max(0, 1 - (z + RADIUS) / (RADIUS * 2));
        const char = getShadeChar(brightness);

        drawPoint(x, -2.5, z, char);
        drawPoint(x, 2.5, z, char);

        const hY = Math.sin(a * 4) * 2;
        drawPoint(x, hY, z, brightness > 0.5 ? "+" : ".");
        drawPoint(x, -hY, z, brightness > 0.5 ? "x" : ".");
      }
      const spacingAngle = (Math.PI * 2) / Math.max(options.length, 6);

      options.forEach((opt, i) => {
        const baseAngle = (i - vIndex) * spacingAngle;
        const px = Math.sin(baseAngle) * RADIUS;
        const pz = -Math.cos(baseAngle) * RADIUS;

        if (pz < RADIUS * 0.5) {
          const isActive = Math.abs(i - vIndex) < 0.1;
          const text = isActive ? `► ${opt.label.toUpperCase()} ◄` : opt.label;

          drawString(text, px, 0, pz - 0.5);

          if (isActive) {
            drawString("▔".repeat(text.length - 4), px, 0.4, pz - 0.5);
          }
        }
      });

      if (dragDir === "left") drawString("<<<", -RADIUS - 1, 0, -RADIUS);
      if (dragDir === "right") drawString(">>>", RADIUS + 1, 0, -RADIUS);

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
  }, [activeIndex, options, dragDir]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = parseInt(e.target.value, 10);
    onChange(options[newIndex].id);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const diff = e.clientX - startX.current;
    if (diff > 5) setDragDir("right");
    else if (diff < -5) setDragDir("left");
  };

  const handlePointerUp = () => {
    startX.current = null;
    setDragDir(null);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto bg-white flex flex-col items-center justify-center p-6 select-none group">
      <input
        type="range"
        min={0}
        max={options.length - 1}
        value={activeIndex}
        onChange={handleSliderChange}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-grab active:cursor-grabbing"
      />

      {/* Direct DOM Mutation Target */}
      <pre
        ref={preRef}
        className="font-mono text-sm leading-none text-slate-900 pointer-events-none font-bold"
      />

      <div className="w-full flex justify-center pointer-events-none opacity-40 font-mono text-sm tracking-widest text-slate-400 mt-4">
        [
        {options.map((_, i) => (
          <span
            key={i}
            className={
              i === activeIndex ? "text-slate-900 font-bold" : "text-slate-300"
            }
          >
            {i === activeIndex ? "■" : "·"}
          </span>
        ))}
        ]
      </div>
    </div>
  );
};

export default Slider;
