import type { Vec3 } from "./skeleton.lib";

export const calculateNormal = (
  v0: number[],
  v1: number[],
  v2: number[],
): Vec3 => {
  const edge1 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];

  const edge2 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];

  const nx = edge1[1] * edge2[2] - edge1[2] * edge2[1];
  const ny = edge1[2] * edge2[0] - edge1[0] * edge2[2];
  const nz = edge1[0] * edge2[1] - edge1[1] * edge2[0];

  return [nx, ny, nz];
};

export const fillTriangle = (
  p0: number[],
  p1: number[],
  p2: number[],
  char: string,
  color: string,
  screen: string[],
  zBuffer: Float32Array,
  colorBuffer: string[],
  width: number,
  height: number,
) => {
  const minX = Math.max(0, Math.floor(Math.min(p0[0], p1[0], p2[0])));
  const maxX = Math.min(width - 1, Math.ceil(Math.max(p0[0], p1[0], p2[0])));
  const minY = Math.max(0, Math.floor(Math.min(p0[1], p1[1], p2[1])));
  const maxY = Math.min(height - 1, Math.ceil(Math.max(p0[1], p1[1], p2[1])));

  // area of the triangle
  const area =
    (p1[1] - p2[1]) * (p0[0] - p2[0]) + (p2[0] - p1[0]) * (p0[1] - p2[1]);

  if (area === 0) return;

  // loop through every pixel inside the bounding box
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      // calculates how close the pixel is to each corner
      const w0 =
        ((p1[1] - p2[1]) * (x - p2[0]) + (p2[0] - p1[0]) * (y - p2[1])) / area;
      const w1 =
        ((p2[1] - p0[1]) * (x - p2[0]) + (p0[0] - p2[0]) * (y - p2[1])) / area;
      const w2 = 1.0 - w0 - w1;

      // if all weights are positive, the pixel is INSIDE the triangle
      if (w0 >= 0 && w1 >= 0 && w2 >= 0) {
        // calculate the exact Z depth of this specific pixel
        const z = w0 * p0[2] + w1 * p1[2] + w2 * p2[2];
        const index = y * width + x;

        // only draw if this pixel is closer than the previous one
        if (z < zBuffer[index]) {
          zBuffer[index] = z;
          screen[index] = char;
          colorBuffer[index] = color;
        }
      }
    }
  }
};
