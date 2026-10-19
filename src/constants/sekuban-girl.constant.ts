import type { Face, Vec3 } from "../libs/skeleton.lib";
import { baseSekubanGirlVertices } from "../matrixes/sekuban-girl.matrix";
import type { MeshGroup } from "../types/mesh-group.type";

const baseSekubanGirlMeshes: MeshGroup[] = [
  {
    name: "Anime Skin (Cel Lit)",
    color: "#ffe4d6",
    char: "@",
    faces: [
      [0, 1, 3],
      [0, 3, 2],
      [1, 6, 3],
      [2, 3, 7],
      [1, 8, 6],
      [8, 17, 6],
      [8, 14, 17],
      [2, 7, 9],
      [9, 7, 22],
      [9, 22, 19],
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
      // Open V-Neck Chest & Collarbone
      [31, 34, 44],
      [31, 44, 35],
      [34, 98, 44],
      [35, 44, 98],
      // Exposed Midriff V-Hip Skin
      [102, 85, 106],
      [103, 106, 86],
      // Lit Bare Arms & Hands
      [57, 65, 67],
      [57, 67, 59],
      [65, 129, 130],
      [65, 130, 67],
      [57, 65, 66],
      [57, 66, 58],
      [65, 129, 131],
      [65, 131, 66],
      [61, 71, 69],
      [61, 63, 71],
      [69, 134, 133],
      [69, 71, 134],
      [61, 69, 70],
      [61, 70, 62],
      [69, 133, 135],
      [69, 135, 70],
      [129, 137, 87],
      [129, 87, 130],
      [137, 138, 88],
      [137, 88, 87],
      [133, 89, 139],
      [133, 134, 89],
      [139, 90, 140],
      [139, 89, 90],
      // Exposed Bare Thigh Front Highlight (Makes the ripped short side pop!)
      [73, 113, 114],
      [73, 114, 74],
      [77, 117, 118],
      [77, 118, 78],
    ],
  },
  {
    name: "Anime Skin (Cel Shadow)",
    color: "#e6b8a2",
    char: "#",
    faces: [
      [1, 29, 8],
      [2, 9, 30],
      [8, 29, 27],
      [14, 8, 27],
      [9, 28, 30],
      [19, 28, 9],
      [0, 32, 1],
      [0, 2, 33],
      [0, 31, 32],
      [0, 33, 31],
      [32, 34, 31],
      [33, 31, 35],
      [32, 42, 41],
      [32, 41, 34],
      [33, 41, 43],
      [33, 35, 41],
      [42, 43, 41],
      [58, 66, 68],
      [58, 68, 60],
      [66, 131, 132],
      [66, 132, 68],
      [59, 67, 68],
      [59, 68, 60],
      [67, 130, 132],
      [67, 132, 68],
      [62, 72, 70],
      [62, 64, 72],
      [70, 136, 135],
      [70, 72, 136],
      [63, 72, 71],
      [63, 64, 72],
      [71, 136, 134],
      [71, 72, 136],
      [131, 88, 138],
      [131, 132, 88],
      [135, 140, 90],
      [135, 90, 136],
      // Bare Thigh Side & Inner Contour Shading
      [74, 114, 116],
      [74, 116, 76],
      [75, 116, 115],
      [75, 76, 116],
      [73, 115, 113],
      [73, 75, 115],
      [77, 119, 117],
      [77, 79, 119],
      [79, 120, 119],
      [79, 119, 80],
      [78, 118, 120],
      [78, 120, 80],
    ],
  },
  {
    name: "Anime Eyes",
    color: "#ffffff",
    char: "O",
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
    name: "Goth Eyeliner & Brows",
    color: "#09090b",
    char: "_",
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
    name: "Goth Lips",
    color: "#e11d48",
    char: "-",
    faces: [
      [5, 6, 4],
      [5, 4, 7],
      [3, 4, 6],
      [3, 7, 4],
    ],
  },

  // =========================================================================
  // 2. FACIAL, EAR, NAVEL & WRIST PIERCINGS / SPIKES
  // =========================================================================
  {
    name: "Silver Piercings & Spiked Cuffs",
    color: "#f8fafc",
    char: "+",
    faces: [
      [40, 13, 18],
      [36, 6, 7],
      [37, 23, 24],
      [38, 3, 7],
      [39, 6, 3],
      [94, 95, 29],
      [96, 30, 97],
      [91, 92, 93],
      [91, 93, 106],
      [129, 131, 158],
      [130, 159, 132],
      [129, 160, 130],
      [131, 132, 161],
      [133, 162, 135],
      [134, 136, 163],
      [133, 134, 164],
      [135, 165, 136],
    ],
  },

  // =========================================================================
  // 3. FITTED CORSET, SILVER EYELETS & SAILOR COLLAR
  // =========================================================================
  {
    name: "Fitted Corset Top (Lit Front)",
    color: "#9f1239",
    char: "#",
    faces: [
      [98, 47, 45],
      [98, 45, 51],
      [47, 100, 45],
      [45, 100, 49],
      [45, 49, 51],
      [98, 46, 48],
      [98, 51, 46],
      [48, 46, 101],
      [46, 50, 101],
      [46, 51, 50],
      [51, 49, 102],
      [51, 102, 106],
      [51, 103, 50],
      [51, 106, 103],
    ],
  },
  {
    name: "Fitted Corset Top (Side Contour Shadow)",
    color: "#500724",
    char: ":",
    faces: [
      [100, 52, 49],
      [49, 52, 104],
      [49, 104, 102],
      [101, 50, 53],
      [50, 105, 53],
      [50, 103, 105],
      [99, 52, 54],
      [99, 54, 53],
      [54, 52, 104],
      [54, 105, 53],
      [54, 104, 105],
      [104, 111, 105],
      [105, 111, 112],
      [100, 57, 58],
      [100, 59, 57],
      [100, 58, 60],
      [101, 62, 61],
      [101, 61, 63],
      [101, 64, 62],
    ],
  },
  {
    name: "Silver Corset Eyelets",
    color: "#e2e8f0",
    char: ":",
    faces: [
      [81, 83, 82],
      [82, 83, 84],
    ],
  },
  {
    name: "Sailor Collar",
    color: "#f8fafc",
    char: "=",
    faces: [
      [99, 148, 146],
      [99, 149, 148],
      [99, 147, 149],
      [47, 146, 142],
      [48, 143, 147],
    ],
  },
  {
    name: "Sailor Tie",
    color: "#fb7185",
    char: "V",
    faces: [
      [98, 141, 142],
      [98, 143, 141],
      [141, 144, 142],
      [141, 143, 145],
    ],
  },

  // =========================================================================
  // 4. HIP WAISTBAND & HIGH-CONTRAST BOOTS
  // =========================================================================
  {
    name: "Low-Rise Skirt Waistband Yoke",
    color: "#be123c",
    char: "x",
    faces: [
      [106, 85, 107],
      [106, 107, 74],
      [106, 77, 108],
      [106, 108, 86],
      [102, 109, 107],
      [102, 104, 109],
      [104, 111, 109],
      [103, 108, 110],
      [103, 110, 105],
      [105, 110, 112],
    ],
  },
  {
    name: "Flared Boot Uppers (Lit Front)",
    color: "#52525b",
    char: "|",
    faces: [
      [113, 121, 122],
      [113, 122, 114],
      [118, 126, 125],
      [118, 125, 117],
    ],
  },
  {
    name: "Flared Boot Uppers (Side Shadow)",
    color: "#3f3f46",
    char: "#",
    faces: [
      [114, 122, 124],
      [114, 124, 116],
      [115, 124, 123],
      [115, 116, 124],
      [113, 123, 121],
      [113, 115, 123],
      [117, 125, 127],
      [117, 127, 119],
      [120, 128, 127],
      [120, 127, 119],
      [118, 120, 128],
      [118, 128, 126],
    ],
  },
  {
    name: "Chunky Platform Soles",
    color: "#71717a",
    char: "M",
    faces: [
      [121, 150, 151],
      [121, 151, 122],
      [123, 153, 152],
      [123, 124, 153],
      [121, 152, 150],
      [121, 123, 152],
      [122, 151, 153],
      [122, 153, 124],
      [150, 152, 153],
      [150, 153, 151],
      [126, 155, 154],
      [126, 154, 125],
      [128, 157, 156],
      [128, 127, 156],
      [126, 157, 155],
      [126, 128, 157],
      [125, 154, 156],
      [125, 156, 127],
      [155, 157, 156],
      [155, 156, 154],
    ],
  },
];

// ============================================================================
// PROCEDURAL ASYMMETRIC RIPPED SUKEBAN SKIRT & PUNK ACCESSORIES
// ============================================================================
let currentIdx = baseSekubanGirlVertices.length;
const extraVerts: Vec3[] = [];
const extraMeshes: MeshGroup[] = [];

// 0. Asymmetric Ripped Long Sukeban Skirt
// Long flowing pleats on the left side of the screen (+X), ripped short on the right side (-X)!
function buildAsymmetricRippedSkirt(cols: number, rows: number) {
  const start = currentIdx;
  const pleats = 16;

  for (let r = 0; r <= rows; r++) {
    const v = r / rows;
    for (let c = 0; c <= cols; c++) {
      const u = c / cols;
      const angle = (u - 0.5) * Math.PI * 2.0;
      const sinA = Math.sin(angle); // +X is left on screen, -X is right on screen
      const cosA = Math.cos(angle);

      // Smooth diagonal slit transition from -X (ripped mini) to +X (long maxi)
      const tSlit = Math.max(0, Math.min(1, (sinA + 0.22) / 0.45));

      // Jagged torn fabric teeth along the diagonal rip and short mini side
      const sawtoothTear =
        Math.abs(((u * 14) % 1) - 0.5) * 0.48 * (1.0 - tSlit * 0.65);

      // Total vertical length: 0.50u (mini-skirt on right) vs 3.75u (ankle-length on left)
      const targetLength = 0.5 + Math.pow(tSlit, 1.15) * 3.25 + sawtoothTear;
      const drop = v * targetLength;
      const dropRatio = drop / 3.75;

      // 3D Pleat folds that deepen toward the bottom hem
      const pleatWave =
        Math.sin(u * Math.PI * pleats * 2) * (0.02 + dropRatio * 0.07);

      // A-Line flare & subtle +X shift so the long skirt clears the knee/calf cleanly
      const rx = 0.88 + dropRatio * 0.34 + pleatWave;
      const rz = 0.54 + dropRatio * 0.24 + pleatWave;
      const shiftX = dropRatio * 0.16;

      const x = shiftX + sinA * rx;
      const y = -1.74 - drop;
      const z = cosA * rz;
      extraVerts.push([x, y, z]);
    }
  }
  currentIdx += (rows + 1) * (cols + 1);

  const pleatLitFaces: Face[] = [];
  const pleatCoreFaces: Face[] = [];
  const pleatShadowFaces: Face[] = [];
  const rippedFraysFaces: Face[] = [];
  const safetyPinFaces: Face[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const u = (c + 0.5) / cols;
      const v = (r + 0.5) / rows;
      const angle = (u - 0.5) * Math.PI * 2.0;
      const sinA = Math.sin(angle);
      const tSlit = Math.max(0, Math.min(1, (sinA + 0.22) / 0.45));
      const pleatWave = Math.sin(u * Math.PI * pleats * 2);

      const tl = start + r * (cols + 1) + c;
      const tr = tl + 1;
      const bl = start + (r + 1) * (cols + 1) + c;
      const br = bl + 1;

      // 1. Silver Punk Safety Pins & Stitches along the diagonal rip edge
      if (
        tSlit > 0.08 &&
        tSlit < 0.85 &&
        v > 0.65 &&
        v < 0.85 &&
        (c + r) % 2 === 0
      ) {
        safetyPinFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 2. Jagged Frayed Torn Hem Threads
      else if (v > 0.84 && tSlit < 0.9) {
        rippedFraysFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 3. Raised 3D Pleat Highlight Crests
      else if (pleatWave > 0.28) {
        pleatLitFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 4. Deep Recessed Pleat Shadow Valleys
      else if (pleatWave < -0.28) {
        pleatShadowFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 5. Core Crimson Sukeban Skirt Body
      else {
        pleatCoreFaces.push([tl, bl, tr], [tr, bl, br]);
      }
    }
  }

  extraMeshes.push(
    {
      name: "Sukeban Skirt Pleat Highlight",
      color: "#f43f5e",
      char: "|",
      faces: pleatLitFaces,
    },
    {
      name: "Sukeban Skirt Core",
      color: "#9f1239",
      char: "I",
      faces: pleatCoreFaces,
    },
    {
      name: "Sukeban Skirt Deep Fold",
      color: "#4c0519",
      char: ":",
      faces: pleatShadowFaces,
    },
    {
      name: "Ripped Skirt Frayed Edge",
      color: "#fb7185",
      char: "x",
      faces: rippedFraysFaces,
    },
    {
      name: "Skirt Rip Safety Pins",
      color: "#f8fafc",
      char: "+",
      faces: safetyPinFaces,
    },
  );
}

buildAsymmetricRippedSkirt(28, 16);

function addRibbonTube(
  name: string,
  color: string,
  char: string,
  segments: number,
  thickness: number,
  curveFn: (t: number) => Vec3,
) {
  const start = currentIdx;
  const faces: Face[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const [x, y, z] = curveFn(t);
    extraVerts.push([x, y + thickness, z]);
    extraVerts.push([x, y - thickness, z + thickness * 0.5]);
  }
  for (let i = 0; i < segments; i++) {
    const tl = start + i * 2;
    const bl = tl + 1;
    const tr = tl + 2;
    const br = tl + 3;
    faces.push([tl, bl, tr], [tr, bl, br]);
  }
  currentIdx += (segments + 1) * 2;
  extraMeshes.push({ name, color, char, faces });
}

addRibbonTube("Spiked Goth Choker", "#f8fafc", "+", 10, 0.08, (t) => {
  const angle = (t - 0.5) * Math.PI * 1.4;
  return [Math.sin(angle) * 0.24, 0.8, Math.cos(angle) * 0.24 + 0.06];
});

addRibbonTube("Silver Chest Chain", "#e2e8f0", "~", 12, 0.07, (t) => {
  const x = (t - 0.5) * 0.68;
  const sag = Math.cos((t - 0.5) * Math.PI) * 0.36;
  return [x, 0.58 - sag, 0.44 + sag * 0.65];
});

addRibbonTube("Slanted Corset Belt Chain", "#f8fafc", "=", 14, 0.1, (t) => {
  const angle = (t - 0.5) * Math.PI * 1.5;
  const slantY = -1.42 - t * 0.38;
  return [Math.sin(angle) * 0.86, slantY, Math.cos(angle) * 0.56 + 0.05];
});

addRibbonTube("Studded Punk Belt", "#a1a1aa", "o", 16, 0.11, (t) => {
  const angle = (t - 0.5) * Math.PI * 2.0;
  return [Math.sin(angle) * 0.92, -1.76, Math.cos(angle) * 0.58];
});

addRibbonTube("Punk Hip Chain Upper", "#f8fafc", "~", 14, 0.09, (t) => {
  const x = -0.05 - t * 0.85;
  const y = -1.78 - Math.sin(t * Math.PI) * 1.15 - t * 0.3;
  const z = 0.62 - t * 0.2 + Math.sin(t * Math.PI) * 0.14;
  return [x, y, z];
});

addRibbonTube("Punk Hip Chain Deep Drape", "#cbd5e1", "*", 16, 0.1, (t) => {
  const x = -0.1 - t * 0.82;
  const y = -1.8 - Math.sin(t * Math.PI) * 2.15 - t * 0.4;
  const z = 0.64 - t * 0.24 + Math.sin(t * Math.PI) * 0.16;
  return [x, y, z];
});

addRibbonTube("Punk Chain Vertical Tail", "#f8fafc", "!", 10, 0.08, (t) => {
  const x = -0.94 - Math.sin(t * Math.PI * 2) * 0.04;
  const y = -1.8 - t * 2.1;
  const z = 0.38;
  return [x, y, z];
});

addRibbonTube("Exposed Leg Thigh Garter", "#18181b", "=", 10, 0.12, (t) => {
  const angle = (t - 0.5) * Math.PI * 1.5;
  return [-0.56 - Math.sin(angle) * 0.34, -3.2, Math.cos(angle) * 0.42];
});
addRibbonTube("Thigh Garter Silver Buckle", "#f8fafc", "+", 6, 0.09, (t) => {
  const angle = (t - 0.5) * Math.PI * 0.8;
  return [-0.56 - Math.sin(angle) * 0.36, -3.2, Math.cos(angle) * 0.45];
});

addRibbonTube("Left Boot Chain", "#e2e8f0", "~", 8, 0.09, (t) => {
  const angle = (t - 0.5) * Math.PI * 1.2;
  return [-0.64 + Math.sin(angle) * 0.34, -5.8, Math.cos(angle) * 0.44];
});
addRibbonTube("Right Boot Chain", "#e2e8f0", "~", 8, 0.09, (t) => {
  const angle = (t - 0.5) * Math.PI * 1.2;
  return [0.64 + Math.sin(angle) * 0.34, -5.8, Math.cos(angle) * 0.44];
});

const HAIR_PALETTES = {
  referenceCrimsonCopper: {
    gloss: "#fde68a",
    highlight: "#f43f5e",
    mid: "#9f1239",
    shadow: "#450a0a",
  },
  neonAnimeRuby: {
    gloss: "#ffffff",
    highlight: "#f472b6",
    mid: "#be123c",
    shadow: "#500724",
  },
  gothSilverStreak: {
    gloss: "#e2e8f0",
    highlight: "#e11d48",
    mid: "#881337",
    shadow: "#27272a",
  },
} as const;

const ACTIVE_HAIR_PALETTE = HAIR_PALETTES.referenceCrimsonCopper;

function buildSilkyHairPatch(
  baseName: string,
  cols: number,
  rows: number,
  locks: number,
  primaryChar: string,
  mapFn: (u: number, v: number) => Vec3,
) {
  const start = currentIdx;
  for (let r = 0; r <= rows; r++) {
    for (let c = 0; c <= cols; c++) {
      extraVerts.push(mapFn(c / cols, r / rows));
    }
  }
  currentIdx += (rows + 1) * (cols + 1);

  const glossFaces: Face[] = [];
  const highlightFaces: Face[] = [];
  const midFaces: Face[] = [];
  const shadowFaces: Face[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const u = (c + 0.5) / cols;
      const v = (r + 0.5) / rows;
      const tl = start + r * (cols + 1) + c;
      const tr = tl + 1;
      const bl = start + (r + 1) * (cols + 1) + c;
      const br = bl + 1;

      const lockWave = Math.sin(u * Math.PI * locks * 2);
      const haloCenter = 0.28 + lockWave * 0.08;

      if (Math.abs(v - haloCenter) < 0.11 && lockWave > -0.15) {
        glossFaces.push([tl, bl, tr], [tr, bl, br]);
      } else if (lockWave > 0.2) {
        highlightFaces.push([tl, bl, tr], [tr, bl, br]);
      } else if (lockWave < -0.35 || v > 0.85) {
        shadowFaces.push([tl, bl, tr], [tr, bl, br]);
      } else {
        midFaces.push([tl, bl, tr], [tr, bl, br]);
      }
    }
  }

  if (glossFaces.length)
    extraMeshes.push({
      name: `${baseName} Gloss`,
      color: ACTIVE_HAIR_PALETTE.gloss,
      char: "~",
      faces: glossFaces,
    });
  if (highlightFaces.length)
    extraMeshes.push({
      name: `${baseName} Silk Ridge`,
      color: ACTIVE_HAIR_PALETTE.highlight,
      char: primaryChar,
      faces: highlightFaces,
    });
  if (midFaces.length)
    extraMeshes.push({
      name: `${baseName} Core`,
      color: ACTIVE_HAIR_PALETTE.mid,
      char: primaryChar,
      faces: midFaces,
    });
  if (shadowFaces.length)
    extraMeshes.push({
      name: `${baseName} Groove`,
      color: ACTIVE_HAIR_PALETTE.shadow,
      char: ":",
      faces: shadowFaces,
    });
}

// 1. Silky Curtain Bangs
buildSilkyHairPatch("Wolfcut Bangs", 16, 7, 5, "|", (u, v) => {
  const centered = (u - 0.5) * 2;
  const centerDist = Math.abs(centered);
  const skullArch = Math.pow(centered, 2) * 0.22;
  const curtainDrop = 0.22 + Math.pow(centerDist, 1.35) * 0.55;
  const strandFeather = Math.sin(u * Math.PI * 10) * 0.09 * Math.pow(v, 1.4);
  const zRidge = Math.sin(u * Math.PI * 10) * 0.04;
  const x = centered * 0.58 * (1 + v * 0.12);
  const y = 2.14 - skullArch - v * curtainDrop + strandFeather;
  const z =
    0.68 + Math.cos(centered * Math.PI * 0.5) * 0.08 + zRidge - v * 0.04;
  return [x, y, z];
});

// 2. Left Silky Face-Framing Wolfcut Layers
buildSilkyHairPatch("Wolfcut Left Locks", 10, 12, 4, "\\", (u, v) => {
  const lockRidge = Math.sin(u * Math.PI * 8) * 0.05;
  const wolfFlick = Math.sin(v * Math.PI * 2.5) * 0.12;
  const featherTip = Math.abs(((u * 4) % 1) - 0.5) * 0.22 * Math.pow(v, 1.5);
  const x = -0.48 + wolfFlick + (u - 0.5) * 0.28 + lockRidge;
  const y = 1.94 - v * 1.58 + featherTip;
  const z = 0.54 - u * 0.42 + lockRidge;
  return [x, y, z];
});

// 3. Right Silky Face-Framing Wolfcut Layers
buildSilkyHairPatch("Wolfcut Right Locks", 10, 12, 4, "/", (u, v) => {
  const lockRidge = Math.sin(u * Math.PI * 8) * 0.05;
  const wolfFlick = Math.sin(v * Math.PI * 2.5) * 0.12;
  const featherTip = Math.abs(((u * 4) % 1) - 0.5) * 0.22 * Math.pow(v, 1.5);
  const x = 0.48 - wolfFlick + (u - 0.5) * 0.28 - lockRidge;
  const y = 1.94 - v * 1.58 + featherTip;
  const z = 0.54 - (1 - u) * 0.42 + lockRidge;
  return [x, y, z];
});

// 4. Rounded Silky Skull Crown
buildSilkyHairPatch("Wolfcut Crown", 16, 8, 6, "|", (u, v) => {
  const theta = (u - 0.5) * Math.PI * 1.65;
  const phi = v * Math.PI * 0.52;
  const strandGroove = Math.sin(u * Math.PI * 12) * 0.03;
  const r = 0.59 + strandGroove;
  const x = Math.sin(theta) * Math.cos(phi) * r;
  const y = 1.58 + Math.sin(phi) * r * 1.02;
  const z = 0.08 - Math.cos(theta) * Math.cos(phi) * r;
  return [x, y, z];
});

// 5. Layered Back Wolfcut Shag
buildSilkyHairPatch("Wolfcut Back Shag", 16, 12, 7, "|", (u, v) => {
  const lockRidge = Math.sin(u * Math.PI * 14) * 0.06;
  const sawtoothTips = Math.abs(((u * 7) % 1) - 0.5) * 0.28 * Math.pow(v, 1.4);
  const wolfFlare =
    1.0 - Math.sin(v * Math.PI) * 0.15 + Math.pow(v, 1.8) * 0.42;
  const x = (u - 0.5) * 1.12 * wolfFlare;
  const y = 1.76 - v * 1.65 + sawtoothTips;
  const z = -0.38 - Math.cos((u - 0.5) * Math.PI) * 0.22 + lockRidge - v * 0.08;
  return [x, y, z];
});

export const sekubanGirlVertices: Vec3[] = [
  ...baseSekubanGirlVertices,
  ...extraVerts,
];
export const sekubanGirlMeshes: MeshGroup[] = [
  ...baseSekubanGirlMeshes,
  ...extraMeshes,
];
