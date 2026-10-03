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

const bangs = buildHairPatch(
  "Wolfcut Bangs",
  "#475569",
  undefined,
  24,
  12,
  currentIdx,
  (u, v) => {
    const locks = 6;
    // Math.pow(..., 4) creates ultra-thin spikes instead of smooth waves
    const spike = Math.pow(Math.sin(u * Math.PI * locks), 4);

    const x = (u - 0.5) * 2.4;
    const y = 1.2 - v * (0.6 + spike * 1.2); // Core length is short, spikes shoot way down

    // Spikes physically extrude forward in 3D space to catch light
    const z =
      1.1 +
      Math.cos((u - 0.5) * Math.PI) * 0.2 -
      Math.pow(v, 2) * 0.2 +
      spike * 0.4;
    return [x, y, z];
  },
);
hairVerts.push(...bangs.verts);
hairMeshes.push(bangs.mesh);
currentIdx += bangs.verts.length;

// Patch 2: EXTREME Left Flare (16x16 Grid = 512 Polys)
const lFlare = buildHairPatch(
  "Wolfcut Left Flare",
  "#334155",
  undefined,
  16,
  16,
  currentIdx,
  (u, v) => {
    const locks = 4;
    const spike = Math.pow(Math.sin(u * Math.PI * locks), 6); // Knife-edge locks
    const flareOut = Math.pow(v, 2) * 1.8;

    // Only the locks kick out, the core stays close to the face
    const x = -0.7 - flareOut * (0.2 + spike * 0.8) + (u - 0.5) * 0.6;
    const y = 0.8 - v * (1.5 + spike * 2.0);
    const z = 0.7 - v * 0.2 + (u - 0.5) * 0.4 + spike * 0.6;
    return [x, y, z];
  },
);
hairVerts.push(...lFlare.verts);
hairMeshes.push(lFlare.mesh);
currentIdx += lFlare.verts.length;

const rFlare = buildHairPatch(
  "Wolfcut Right Flare",
  "#334155",
  undefined,
  16,
  16,
  currentIdx,
  (u, v) => {
    const locks = 4;
    const spike = Math.pow(Math.sin(u * Math.PI * locks), 6);
    const flareOut = Math.pow(v, 2) * 1.8;

    const x = 0.7 + flareOut * (0.2 + spike * 0.8) + (u - 0.5) * 0.6;
    const y = 0.8 - v * (1.5 + spike * 2.0);
    const z = 0.7 - v * 0.2 - (u - 0.5) * 0.4 + spike * 0.6;
    return [x, y, z];
  },
);
hairVerts.push(...rFlare.verts);
hairMeshes.push(rFlare.mesh);
currentIdx += rFlare.verts.length;

// Patch 4: EXTREME Crown (32x16 Grid = 1024 Polys)
const crown = buildHairPatch(
  "Wolfcut Crown",
  "#1e293b",
  undefined,
  32,
  16,
  currentIdx,
  (u, v) => {
    const theta = (u - 0.5) * Math.PI * 1.7;
    const phi = v * Math.PI * 0.55;

    // Creates high-frequency chaotic spikes all over the top of the head
    const spike = Math.pow(
      Math.abs(Math.sin(u * Math.PI * 18) * Math.sin(v * Math.PI * 10)),
      4,
    );
    const r = 1.1 + spike * 0.35; // The spikes erupt off the base skull

    const x = Math.sin(theta) * Math.cos(phi) * r;
    const y = 0.3 + Math.sin(phi) * r * 1.4;
    const z = 0.15 - Math.cos(theta) * Math.cos(phi) * r;
    return [x, y, z];
  },
);
hairVerts.push(...crown.verts);
hairMeshes.push(crown.mesh);
currentIdx += crown.verts.length;

// Patch 5: EXTREME Long Shag Mantle (32x20 Grid = 1280 Polys)
const shag = buildHairPatch(
  "Wolfcut Long Shag",
  "#0f172a",
  undefined,
  32,
  20,
  currentIdx,
  (u, v) => {
    const locks = 10;
    const spike = Math.pow(Math.sin(u * Math.PI * locks), 8); // Deeply separated needle-like tails

    const neckTaper = 1.0 - Math.sin(v * Math.PI) * 0.3 + Math.pow(v, 2) * 2.0;
    const x = (u - 0.5) * 2.4 * neckTaper;

    // The locks drag down far past the shoulders while the gaps stay high
    const y = 0.5 - v * (3.0 + spike * 3.5);

    const wrapBack = Math.pow(u - 0.5, 2) * 1.5;
    const kickOut = Math.pow(v, 2) * 1.5;

    // Extrude the locks heavily into the foreground Z-space
    const z = -0.4 - wrapBack + kickOut * spike + spike * 0.7;
    return [x, y, z];
  },
);
hairVerts.push(...shag.verts);
hairMeshes.push(shag.mesh);

export const punkHeadVertices: Vec3[] = [...mascotFaceVertices, ...hairVerts];
export const punkHeadMeshes: MeshGroup[] = [...mascotFaceMeshes, ...hairMeshes];
