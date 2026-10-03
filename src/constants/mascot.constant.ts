import type { Face, Vec3 } from "../libs/skeleton.lib";
import { mascotFaceVertices } from "../matrixes/mascot.matrix";
import type { MeshGroup } from "../types/mesh-group.type";

export const mascotFaceMeshes: MeshGroup[] = [
  {
    name: "Piercings",
    color: "#cbd5e1",
    char: "+",
    faces: [
      [36, 10, 5],
      [37, 23, 24],
      [38, 39, 3],
      [40, 11, 13],
      [40, 11, 18],
    ],
  },
  {
    name: "Irises",
    color: "#0ea5e9",
    char: "@",
    faces: [
      [15, 16, 13],
      [15, 14, 16],
      [15, 13, 17],
      [15, 17, 14],
      [20, 18, 21],
      [20, 21, 19],
      [20, 22, 18],
      [20, 19, 22],
    ],
  },
  {
    name: "Heavy Eyeliner, Lashes & Brows",
    color: "#020617",
    char: "x",
    faces: [
      [16, 14, 27],
      [13, 11, 16],
      [21, 28, 19],
      [18, 21, 11],
      [23, 24, 12],
      [25, 12, 26],
    ],
  },
  {
    name: "Lips",
    color: "#94a3b8",
    char: "w",
    faces: [
      [5, 6, 4],
      [5, 4, 7],
      [3, 4, 6],
      [3, 7, 4],
    ],
  },
  {
    name: "Skin Face",
    color: "#f8fafc",
    faces: [
      [0, 1, 3],
      [0, 3, 2],
      [1, 6, 3],
      [2, 3, 7],
      [1, 8, 6],
      [8, 17, 6],
      [8, 14, 17],
      [1, 29, 8],
      [2, 7, 9],
      [9, 7, 22],
      [9, 22, 19],
      [2, 9, 30],
      [10, 6, 5],
      [10, 5, 7],
      [10, 8, 6],
      [10, 7, 9],
      [10, 13, 8],
      [10, 9, 18],
      [10, 11, 13],
      [10, 18, 11],
      [11, 12, 23],
      [11, 25, 12],
      [23, 12, 27],
      [25, 28, 12],
      [8, 29, 27],
      [14, 8, 27],
      [9, 28, 30],
      [19, 28, 9],
      [0, 32, 1],
      [0, 2, 33],
      [0, 31, 32],
      [0, 33, 31],
      [32, 29, 1],
      [33, 2, 30],
      [32, 34, 31],
      [33, 31, 35],
    ],
  },
];

const buildHairPatch = (
  name: string,
  color: string,
  char: string | undefined,
  cols: number,
  rows: number,
  startIdx: number,
  mapFn: (u: number, v: number) => Vec3,
): { verts: Vec3[]; mesh: MeshGroup } => {
  const verts: Vec3[] = [];
  const faces: Face[] = [];

  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      verts.push(mapFn(c / cols, r / rows));
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const tl = startIdx + r * (cols + 1) + c;
      const tr = tl + 1;
      const bl = startIdx + (r + 1) * (cols + 1) + c;
      const br = bl + 1;
      faces.push([tl, bl, tr]);
      faces.push([tr, bl, br]);
    }
  }
  return { verts, mesh: { name, color, char, faces } };
};

let currentIdx = mascotFaceVertices.length;
const hairVerts: Vec3[] = [];
const hairMeshes: MeshGroup[] = [];

// Patch 1: Sweeping Bangs
const bangs = buildHairPatch(
  "Wolfcut Bangs",
  "#475569",
  undefined,
  20,
  10,
  currentIdx,
  (u, v) => {
    const locks = 5;
    // Adding v * Math.PI creates a curve/twist to the strands as they fall
    const swoop = Math.sin(u * Math.PI * locks + v * Math.PI * 1.5);
    const lockDepth = swoop * 0.3 * Math.pow(v, 1.2);

    const x = (u - 0.5) * 2.6 + lockDepth * 0.2; // Locks drift slightly sideways
    const y = 1.3 - v * 1.2 + Math.abs(lockDepth) * 0.5; // Jagged length
    const z = 1.2 - Math.pow(u - 0.5, 2) * 1.2 - v * 0.2 + lockDepth * 0.8; // Deep 3D extrusion for shadows

    return [x, y, z];
  },
);
hairVerts.push(...bangs.verts);
hairMeshes.push(bangs.mesh);
currentIdx += bangs.verts.length;

// Patch 2: Left Flare (Hugs cheek, swoops backward and out)
const lFlare = buildHairPatch(
  "Wolfcut Left Flare",
  "#334155",
  undefined,
  14,
  16,
  currentIdx,
  (u, v) => {
    const locks = 4;
    const swoop = Math.sin(u * Math.PI * locks - v * Math.PI); // Sweeps back away from face
    const lockDepth = swoop * 0.4 * Math.pow(v, 1.5);

    const flareOut = Math.pow(v, 2.5) * 1.8;

    const x = -0.7 - flareOut + (u - 0.5) * 0.8 + lockDepth * 0.3;
    const y = 0.9 - v * 3.2 + Math.abs(lockDepth) * 0.6;
    const z = 0.8 - v * 0.3 + (u - 0.5) * 0.5 + lockDepth * 0.9;
    return [x, y, z];
  },
);
hairVerts.push(...lFlare.verts);
hairMeshes.push(lFlare.mesh);
currentIdx += lFlare.verts.length;

// Patch 3: Right Flare (Mirrored)
const rFlare = buildHairPatch(
  "Wolfcut Right Flare",
  "#334155",
  undefined,
  14,
  16,
  currentIdx,
  (u, v) => {
    const locks = 4;
    const swoop = Math.sin(u * Math.PI * locks + v * Math.PI);
    const lockDepth = swoop * 0.4 * Math.pow(v, 1.5);

    const flareOut = Math.pow(v, 2.5) * 1.8;

    const x = 0.7 + flareOut + (u - 0.5) * 0.8 - lockDepth * 0.3;
    const y = 0.9 - v * 3.2 + Math.abs(lockDepth) * 0.6;
    const z = 0.8 - v * 0.3 - (u - 0.5) * 0.5 + lockDepth * 0.9;
    return [x, y, z];
  },
);
hairVerts.push(...rFlare.verts);
hairMeshes.push(rFlare.mesh);
currentIdx += rFlare.verts.length;

// Patch 4: Crown (Smooth volume with thick layered ridges)
const crown = buildHairPatch(
  "Wolfcut Crown",
  "#1e293b",
  undefined,
  24,
  12,
  currentIdx,
  (u, v) => {
    const theta = (u - 0.5) * Math.PI * 1.7;
    const phi = v * Math.PI * 0.55;

    // Creates broad, sweeping ridges instead of erratic noise
    const ridge = Math.sin(u * Math.PI * 8) * Math.cos(v * Math.PI * 4) * 0.08;
    const r = 1.18 + Math.pow(v, 2) * 0.1 + ridge;

    const x = Math.sin(theta) * Math.cos(phi) * r;
    const y = 0.4 + Math.sin(phi) * r * 1.35;
    const z = 0.1 - Math.cos(theta) * Math.cos(phi) * r;
    return [x, y, z];
  },
);
hairVerts.push(...crown.verts);
hairMeshes.push(crown.mesh);
currentIdx += crown.verts.length;

// Patch 5: Shag Mantle (Heavy cascading shoulder locks)
const shag = buildHairPatch(
  "Wolfcut Long Shag",
  "#0f172a",
  undefined,
  30,
  20,
  currentIdx,
  (u, v) => {
    const locks = 10;
    // Deep swooping wave that increases in amplitude as it falls
    const swoop = Math.sin(u * Math.PI * locks + v * Math.PI * 2.0);
    const lockDepth = swoop * 0.6 * Math.pow(v, 1.5);

    const neckTaper = 1.2 - Math.sin(v * Math.PI) * 0.3 + Math.pow(v, 2) * 2.4;
    const x = (u - 0.5) * 2.2 * neckTaper + lockDepth * 0.4;

    const y = 0.6 - v * 5.0 + Math.abs(lockDepth) * 0.8;

    const wrapBack = Math.pow(u - 0.5, 2) * 1.8;
    const kickOut = Math.pow(v, 2.2) * 2.0;

    const z = -0.5 - wrapBack + kickOut + lockDepth * 1.2;
    return [x, y, z];
  },
);
hairVerts.push(...shag.verts);
hairMeshes.push(shag.mesh);

export const punkHeadVertices: Vec3[] = [...mascotFaceVertices, ...hairVerts];
export const punkHeadMeshes: MeshGroup[] = [...mascotFaceMeshes, ...hairMeshes];
