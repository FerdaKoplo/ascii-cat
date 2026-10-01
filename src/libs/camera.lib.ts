import type { Vec3 } from "./skeleton.lib";

export const render3D = (
  x: number,
  y: number,
  z: number,
  screenWidth: number,
  screenHeight: number,
) => {
  const FOV = 200;
  const CAMERA_DISTANCE = 50;

  const adjustedZ = z + CAMERA_DISTANCE;

  // multiply x * 2 because terminal font characters are usually twice as tall as they are wide i think
  const screenX = Math.round(((x * 2) / adjustedZ) * FOV + screenWidth / 2);
  const screenY = Math.round((-y / adjustedZ) * FOV + screenHeight / 2);

  return [screenX, screenY, adjustedZ];
};

export function rotateYAxis(vertex: number[], angle: number): Vec3 {
  const [x, y, z] = vertex;
  const c = Math.cos(angle);
  const s = Math.sin(angle);

  const newX = x * c + z * s;
  const newY = y;
  const newZ = x * -s + z * c;

  return [newX, newY, newZ];
}
