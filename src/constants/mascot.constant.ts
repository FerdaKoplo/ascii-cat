import type { Face, Vec3 } from "../libs/skeleton.lib";
import { mascotFaceVertices } from "../matrixes/mascot.matrix";
import type { MeshGroup } from "../types/mesh-group.type";

export const mascotFaceMeshes: MeshGroup[] = [
  {
    name: "Silver Piercings & Ear Cuffs",
    color: "#e2e8f0",
    char: "+",
    faces: [
      [36, 10, 71],
      [37, 23, 24],
      [38, 39, 3],
      [40, 11, 13],
      [40, 11, 18],
      // Left & Right Sculpted Ear Helix Cuffs
      [95, 87, 88],
      [96, 88, 89],
      [105, 98, 97],
      [106, 99, 98],
    ],
  },

  {
    name: "Carved Marble Eyeballs",
    color: "#ffffff",
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
    name: "Deep Orbital Undercut & Brow Ridge Shadow",
    color: "#334155",
    char: "x",
    faces: [
      // Deep classical shadow under the brow bone (Orbital Rim)
      [16, 14, 78],
      [16, 78, 23],
      [13, 85, 23],
      [13, 16, 23],
      [21, 79, 19],
      [21, 25, 79],
      [18, 25, 85],
      [18, 23, 21],
      [23, 78, 24],
      [25, 26, 79],
    ],
  },

  {
    name: "Sculpted Upper Lip",
    color: "#94a3b8",
    char: "w",
    faces: [
      [5, 6, 4],
      [5, 4, 7],
    ],
  },
  {
    name: "Sculpted Lower Lip Cushion",
    color: "#cbd5e1",
    faces: [
      [3, 4, 6],
      [3, 7, 4],
    ],
  },

  {
    name: "Marble Highlight Planes (Carrara White)",
    color: "#f8fafc",
    faces: [
      // Forehead, Glabella & Brow Bone
      [11, 85, 23],
      [11, 25, 85],
      [85, 12, 23],
      [85, 25, 12],
      [23, 12, 27],
      [25, 28, 12],
      [23, 27, 24],
      [25, 26, 28],
      // Straight Greek Nasal Bridge & Dorsum
      [10, 11, 69],
      [10, 70, 11],
      [11, 13, 69],
      [11, 70, 18],
      // High Malar Cheekbones & Infraorbital Planes
      [8, 14, 17],
      [8, 17, 13],
      [13, 69, 8],
      [9, 18, 22],
      [9, 22, 19],
      [18, 9, 70],
      [8, 72, 14],
      [9, 19, 73],
      [14, 72, 27],
      [19, 28, 73],
      // Philtrum & Anterior Chin Pad (Mental Protuberance)
      [71, 80, 5],
      [71, 5, 81],
      [82, 83, 0],
      [82, 0, 84],
      [83, 1, 0],
      [84, 0, 2],
      // Anterior Throat, SCM V-Cords & Prominent Collarbone Shafts
      [31, 48, 47],
      [31, 47, 49],
      [48, 34, 47],
      [49, 47, 35],
      [47, 34, 61],
      [47, 61, 35],
      [34, 62, 61],
      [35, 61, 63],
      [34, 55, 62],
      [35, 63, 56],
      [55, 64, 62],
      [56, 63, 65],
      [50, 57, 55],
      [51, 56, 58],
      [55, 57, 64],
      [56, 65, 58],
    ],
  },

  {
    name: "Marble Mid-Tone Planes (Buccal & Jaw Structure)",
    color: "#e2e8f0",
    faces: [
      // Nasal Side Walls & Oral Barrel
      [69, 80, 71],
      [70, 71, 81],
      [69, 6, 80],
      [70, 81, 7],
      [80, 6, 5],
      [81, 5, 7],
      [8, 69, 74],
      [9, 75, 70],
      [74, 69, 6],
      [75, 7, 70],
      // Buccal Cheek Hollows & Gonial Mandible Corners
      [8, 74, 72],
      [9, 73, 75],
      [72, 74, 76],
      [73, 77, 75],
      [74, 1, 76],
      [75, 77, 2],
      [74, 6, 1],
      [75, 2, 7],
      [6, 3, 1],
      [7, 2, 3],
      [3, 82, 1],
      [3, 2, 82],
      [82, 1, 83],
      [82, 84, 2],
      // Pre-Auricular Temple-to-Jaw Planes
      [72, 29, 27],
      [73, 28, 30],
      [72, 76, 91],
      [73, 101, 77],
      [72, 91, 92],
      [73, 102, 101],
      [72, 92, 29],
      [73, 30, 102],
      // Left 3D Sculpted Ear (Helix Rim, Antihelix & Lobe)
      [29, 87, 93],
      [87, 88, 93],
      [88, 89, 93],
      [93, 89, 90],
      [93, 90, 91],
      [92, 93, 91],
      [29, 93, 92],
      // Right 3D Sculpted Ear (Helix Rim, Antihelix & Lobe)
      [30, 103, 97],
      [97, 103, 98],
      [98, 103, 99],
      [103, 100, 99],
      [103, 101, 100],
      [102, 101, 103],
      [30, 102, 103],
    ],
  },

  {
    name: "Marble Deep Chiseled Shadows",
    color: "#94a3b8",
    faces: [
      // Under-Nose Septum Shadow & Deep Ear Concha Bowls
      [10, 69, 71],
      [10, 71, 70],
      [92, 94, 91],
      [93, 94, 92],
      [89, 94, 93],
      [90, 94, 89],
      [102, 101, 104],
      [103, 102, 104],
      [99, 103, 104],
      [100, 99, 104],
      // Submandibular Shadow (Under Chin & Jawline)
      [0, 32, 1],
      [0, 2, 33],
      [0, 31, 32],
      [0, 33, 31],
      [1, 32, 76],
      [2, 77, 33],
      [76, 32, 41],
      [77, 42, 33],
      // Supraclavicular Fossae (Deep Hollows Above Collarbones) & Lateral Neck
      [32, 48, 31],
      [33, 31, 49],
      [32, 50, 48],
      [33, 49, 51],
      [50, 55, 48],
      [51, 49, 56],
      [50, 59, 57],
      [51, 58, 60],
      [32, 41, 44],
      [32, 44, 50],
      [33, 45, 42],
      [33, 51, 45],
      // Posterior Nape, Scapulae & Classical Marble Bust Pedestal Base
      [41, 43, 44],
      [43, 46, 44],
      [42, 45, 43],
      [43, 45, 46],
      [44, 46, 53],
      [46, 52, 53],
      [45, 54, 46],
      [46, 54, 52],
      [50, 44, 53],
      [51, 54, 45],
      [50, 53, 59],
      [51, 60, 54],
      [53, 52, 66],
      [53, 66, 67],
      [54, 66, 52],
      [54, 68, 66],
      [53, 67, 59],
      [54, 60, 68],
      // Carved Classical Bust Termination Rim
      [61, 62, 86],
      [61, 86, 63],
      [62, 64, 86],
      [63, 86, 65],
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
  "#64748b",
  undefined,
  22,
  10,
  currentIdx,
  (u, v) => {
    const centered = (u - 0.5) * 2;
    const absC = Math.abs(centered);

    // Deeply fluted Hellenistic S-wave locks
    const locks = 6;
    const swoop = Math.sin(u * Math.PI * locks + v * Math.PI * 1.2);
    const lockRidge = swoop * 0.14 * Math.pow(v, 0.85);

    // Center part exposes the Glabella keystone (85) and sweeps toward temples
    const curtainDrop = 0.52 + Math.pow(absC, 1.45) * 0.78;
    const jaggedTips = Math.abs(((u * 7) % 1) - 0.5) * 0.2 * Math.pow(v, 1.3);

    const x = centered * (1.02 + v * 0.18) + swoop * 0.07 * v;
    const y =
      1.36 - Math.pow(centered, 2) * 0.16 - v * curtainDrop + jaggedTips;
    const z = 1.26 - Math.pow(centered, 2) * 0.36 - v * 0.05 + lockRidge;

    return [x, y, z];
  },
);
hairVerts.push(...bangs.verts);
hairMeshes.push(bangs.mesh);
currentIdx += bangs.verts.length;

const sides = [-1, 1] as const;
sides.forEach((side) => {
  const templeWisp = buildHairPatch(
    side === -1 ? "Wolfcut Left Temple Lock" : "Wolfcut Right Temple Lock",
    "#475569",
    undefined,
    10,
    10,
    currentIdx,
    (u, v) => {
      const locks = 3;
      const swoop = Math.sin(u * Math.PI * locks - side * v * Math.PI);
      const lockRidge = swoop * 0.14 * v;

      // Sweeps backward above the ear helix (y > 0.35) so the 3D ear is 100% visible!
      const x = side * (0.94 + v * 0.32 + Math.abs(lockRidge) * 0.2);
      const y = 1.05 - v * 0.72 + u * 0.25;
      const z = 0.72 - u * 0.55 - v * 0.65 + lockRidge;
      return [x, y, z];
    },
  );
  hairVerts.push(...templeWisp.verts);
  hairMeshes.push(templeWisp.mesh);
  currentIdx += templeWisp.verts.length;
});

sides.forEach((side) => {
  const neckDrape = buildHairPatch(
    side === -1
      ? "Wolfcut Left Neck-Shoulder Flow"
      : "Wolfcut Right Neck-Shoulder Flow",
    "#334155",
    undefined,
    14,
    18,
    currentIdx,
    (u, v) => {
      const locks = 5;
      const swoop = Math.sin(u * Math.PI * locks - side * v * Math.PI * 1.5);
      const lockRidge = swoop * 0.18 * Math.pow(v, 1.1);

      // Tucks behind the ear at top (v < 0.35), then emerges below the earlobe
      const earClearanceZ = Math.exp(-Math.pow((v - 0.15) / 0.18, 2)) * -0.38;

      // Pinches inward into the sculpted neck hollow beside the SCM muscle (v ~ 0.45)
      const neckPinch = Math.exp(-Math.pow((v - 0.45) / 0.18, 2)) * 0.28;

      // Hits the clavicle/trapezius shelf (v > 0.55) and spreads across the shoulder
      const shoulderT = Math.max(0, (v - 0.5) / 0.5);
      const shoulderFlare = Math.pow(shoulderT, 1.6) * 1.18;
      const forwardClavicleSweep = Math.pow(shoulderT, 1.25) * 0.85;

      const sawtoothTips =
        Math.abs(((u * 5) % 1) - 0.5) * 0.3 * Math.pow(v, 1.5);
      const baseSpan = (u - 0.5) * (0.48 + shoulderT * 0.52);

      const x =
        side * (0.92 - neckPinch + shoulderFlare) +
        baseSpan +
        side * lockRidge * 0.25;
      const y = 0.25 - v * 3.1 + Math.pow(shoulderT, 2) * 0.28 + sawtoothTips;
      const z =
        0.12 +
        earClearanceZ -
        u * 0.45 +
        forwardClavicleSweep +
        lockRidge * 0.65;

      return [x, y, z];
    },
  );
  hairVerts.push(...neckDrape.verts);
  hairMeshes.push(neckDrape.mesh);
  currentIdx += neckDrape.verts.length;
});

const crown = buildHairPatch(
  "Wolfcut Crown",
  "#1e293b",
  undefined,
  24,
  12,
  currentIdx,
  (u, v) => {
    const theta = (u - 0.5) * Math.PI * 1.75;
    const phi = v * Math.PI * 0.56;

    // Deeply carved Hellenistic lock flutes across the skull dome
    const ridge = Math.sin(u * Math.PI * 12) * Math.cos(v * Math.PI * 3) * 0.08;
    const r = 1.16 + Math.sin(phi) * 0.08 + ridge;

    const x = Math.sin(theta) * Math.cos(phi) * r;
    const y = 0.36 + Math.sin(phi) * r * 1.32;
    const z = 0.06 - Math.cos(theta) * Math.cos(phi) * r;
    return [x, y, z];
  },
);
hairVerts.push(...crown.verts);
hairMeshes.push(crown.mesh);
currentIdx += crown.verts.length;

const shag = buildHairPatch(
  "Wolfcut Long Shag",
  "#0f172a",
  undefined,
  28,
  20,
  currentIdx,
  (u, v) => {
    const centered = (u - 0.5) * 2;
    const absC = Math.abs(centered);

    const locks = 10;
    const swoop = Math.sin(u * Math.PI * locks + v * Math.PI * 1.6);
    const lockRidge = swoop * 0.24 * Math.pow(v, 1.2);

    // Pinches into the nape hollow (v ~ 0.38), then fans over the deltoid caps
    const napePinch = Math.exp(-Math.pow((v - 0.38) / 0.22, 2)) * 0.28;
    const shoulderSpread = Math.pow(Math.max(0, (v - 0.45) / 0.55), 1.6) * 1.18;
    const widthFactor = 1.05 - napePinch + shoulderSpread;

    const x = centered * 1.18 * widthFactor + swoop * 0.14 * v;

    const deltoidLift = Math.pow(absC, 1.6) * Math.pow(v, 1.5) * 0.45;
    const jaggedTips = Math.abs(((u * 10) % 1) - 0.5) * 0.35 * Math.pow(v, 1.4);
    const y = 0.45 - v * 3.45 + deltoidLift + jaggedTips;

    const napeCurveIn = Math.sin(v * Math.PI) * 0.22;
    const outerShoulderWrap = Math.pow(absC, 1.8) * Math.pow(v, 1.3) * 1.15;
    const tipFlickBack =
      Math.pow(Math.max(0, v - 0.7) / 0.3, 2) * 0.35 * (1 - absC * 0.5);

    const z =
      -0.48 -
      (1 - Math.pow(absC, 2)) * 0.35 +
      napeCurveIn * 0.4 +
      outerShoulderWrap -
      tipFlickBack +
      lockRidge * 0.7;

    return [x, y, z];
  },
);
hairVerts.push(...shag.verts);
hairMeshes.push(shag.mesh);

export const punkHeadVertices: Vec3[] = [...mascotFaceVertices, ...hairVerts];
export const punkHeadMeshes: MeshGroup[] = [...mascotFaceMeshes, ...hairMeshes];
