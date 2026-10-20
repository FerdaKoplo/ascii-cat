import type { Face, Vec3 } from "../libs/skeleton.lib";
import { baseSkaterGirlVertices } from "../matrixes/skater-girl";
import type { MeshGroup } from "../types/mesh-group.type";

const baseSkaterGirlMeshes: MeshGroup[] = [
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
      // Collarbone above crewneck
      [31, 34, 44],
      [31, 44, 35],
      // Full Exposed Toned Midriff & Stomach (From high crop-top to low-rise cargos!)
      [51, 49, 102],
      [51, 102, 106],
      [51, 103, 50],
      [51, 106, 103],
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
      // Side Oblique & Midriff Back Shading
      [49, 54, 104],
      [49, 104, 102],
      [50, 105, 54],
      [50, 103, 105],
      [54, 104, 105],
      // Under-Arms
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
    ],
  },
  {
    name: "Anime Eyes (Cyan Skater Iris Highlight)",
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
    name: "Winged Liner & Brows",
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
    name: "Glossy Coral-Pink Lips",
    color: "#fb7185",
    char: "-",
    faces: [
      [5, 6, 4],
      [5, 4, 7],
      [3, 4, 6],
      [3, 7, 4],
    ],
  },
  {
    name: "Skater Nose Bandaid & Belly Piercing",
    color: "#f8fafc",
    char: "=",
    faces: [
      // Cute horizontal bandaid across nose bridge
      [36, 40, 37],
      [36, 38, 40],
      // Ear hoops & Navel piercing
      [94, 95, 29],
      [96, 30, 97],
      [91, 92, 93],
      [91, 93, 106],
    ],
  },

  // =========================================================================
  // 2. CROPPED STREETWEAR RAGLAN BABY-TEE & SWEATBANDS
  // =========================================================================
  {
    name: "White Cropped Baby-Tee (Front)",
    color: "#f8fafc",
    char: "#",
    faces: [
      [44, 47, 98],
      [44, 98, 48],
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
    ],
  },
  {
    name: "Cyber-Cyan Chest Graphic Decal",
    color: "#06b6d4",
    char: "X",
    faces: [
      [81, 83, 144],
      [82, 145, 84],
      [144, 83, 84],
      [81, 144, 145],
      [81, 145, 82],
    ],
  },
  {
    name: "Contrast Charcoal Raglan Sleeves & Back",
    color: "#27272a",
    char: ":",
    faces: [
      // Raglan Shoulder & Cap Sleeves
      [100, 57, 58],
      [100, 59, 57],
      [100, 58, 60],
      [101, 62, 61],
      [101, 61, 63],
      [101, 64, 62],
      [47, 146, 142],
      [48, 143, 147],
      // Crop-Top Back
      [99, 52, 54],
      [99, 54, 53],
      [100, 52, 49],
      [101, 50, 53],
    ],
  },
  {
    name: "Neon Striped Skate Wristbands",
    color: "#22d3ee",
    char: "=",
    faces: [
      [129, 158, 159],
      [129, 159, 130],
      [131, 160, 161],
      [131, 161, 132],
      [133, 163, 162],
      [133, 134, 163],
      [135, 165, 164],
      [135, 136, 165],
    ],
  },

  // =========================================================================
  // 3. CHUNKY PUFF-TONGUE SKATE SNEAKERS (Black/White/Cyan)
  // =========================================================================
  {
    name: "Chunky Skate Sneaker Uppers",
    color: "#18181b",
    char: "#",
    faces: [
      [121, 150, 152],
      [123, 152, 153],
      [124, 153, 151],
      [126, 155, 157],
      [128, 157, 156],
      [127, 156, 154],
    ],
  },
  {
    name: "Fat White Skate Shoe Laces & Gum Soles",
    color: "#f8fafc",
    char: "=",
    faces: [
      // Puffy white-laced sneaker fronts & thick white midsoles
      [121, 150, 151],
      [121, 151, 122],
      [122, 151, 153],
      [122, 153, 124],
      [150, 152, 153],
      [150, 153, 151],
      [126, 155, 154],
      [126, 154, 125],
      [125, 154, 156],
      [125, 156, 127],
      [155, 157, 156],
      [155, 156, 154],
    ],
  },
];

let currentIdx = baseSkaterGirlVertices.length;
const extraVerts: Vec3[] = [];
const extraMeshes: MeshGroup[] = [];

// 1. Baggy Y2K Parachute Cargo Pants (2 Separate Wide-Leg Cylinders + Side Pockets!)
function buildBaggyCargoPants(cols: number, rows: number) {
  const legSides = [-1, 1]; // Left Leg (-1) & Right Leg (+1)
  const litFaces: Face[] = [];
  const coreFaces: Face[] = [];
  const shadowFaces: Face[] = [];
  const pocketFaces: Face[] = [];
  const neonPipingFaces: Face[] = [];

  for (const side of legSides) {
    const start = currentIdx;
    for (let r = 0; r <= rows; r++) {
      const v = r / rows;
      for (let c = 0; c <= cols; c++) {
        const u = c / cols;
        const angle = (u - 0.5) * Math.PI * 2.0;
        const sinA = Math.sin(angle);
        const cosA = Math.cos(angle);

        // Center of each pant leg shifts slightly outward from hip to ankle
        const centerX = side * (0.5 + v * 0.16);
        const y = -1.75 - v * 4.85; // From low-rise hip (-1.75) to sneaker cuff (-6.60)

        // Wide ballooning parachute silhouette at knee (v ~ 0.55) + stacked ankle folds
        const baggyBalloon = Math.sin(v * Math.PI * 0.88) * 0.2;
        const ankleStack = Math.sin(v * Math.PI * 6) * 0.04 * v;
        const cargoPleat = Math.cos(angle * 3) * 0.04;

        // Boxy 3D Side Cargo Pocket protrusion at mid-thigh (v between 0.25 and 0.58)
        const isOuterSide = side * sinA > 0.45;
        const isPocketHeight = v > 0.25 && v < 0.58;
        const pocketBulge = isOuterSide && isPocketHeight ? 0.14 : 0.0;

        // Keep inner thigh radius tighter so there is always a clean gap between legs
        const isInnerSide = side * sinA < -0.25;
        const rx =
          (isInnerSide ? 0.3 : 0.44 + baggyBalloon + pocketBulge) +
          ankleStack +
          cargoPleat;
        const rz = 0.44 + baggyBalloon * 0.85 + ankleStack + cargoPleat;

        const x = centerX + sinA * rx;
        const z = cosA * rz;
        extraVerts.push([x, y, z]);
      }
    }
    currentIdx += (rows + 1) * (cols + 1);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const u = (c + 0.5) / cols;
        const v = (r + 0.5) / rows;
        const angle = (u - 0.5) * Math.PI * 2.0;
        const sinA = Math.sin(angle);
        const cosA = Math.cos(angle);

        const tl = start + r * (cols + 1) + c;
        const tr = tl + 1;
        const bl = start + (r + 1) * (cols + 1) + c;
        const br = bl + 1;

        const isOuterSide = side * sinA > 0.48;
        const isPocketHeight = v > 0.26 && v < 0.56;

        // 1. Boxy Side Cargo Pockets with Flaps
        if (isOuterSide && isPocketHeight) {
          pocketFaces.push([tl, bl, tr], [tr, bl, br]);
        }
        // 2. Reflective Cyber-Lime / Cyan Side Seam Piping
        else if (Math.abs(side * sinA - 0.38) < 0.12 && cosA > 0) {
          neonPipingFaces.push([tl, bl, tr], [tr, bl, br]);
        }
        // 3. Lit Front Parachute Crease
        else if (cosA > 0.55) {
          litFaces.push([tl, bl, tr], [tr, bl, br]);
        }
        // 4. Inner & Back Cargo Shadow Folds
        else if (cosA < -0.2 || side * sinA < -0.3) {
          shadowFaces.push([tl, bl, tr], [tr, bl, br]);
        }
        // 5. Core Cargo Fabric
        else {
          coreFaces.push([tl, bl, tr], [tr, bl, br]);
        }
      }
    }
  }

  extraMeshes.push(
    {
      name: "Baggy Cargo Pants (Lit Front)",
      color: "#84cc16",
      char: "H",
      faces: litFaces,
    },
    {
      name: "Baggy Cargo Pants (Olive Core)",
      color: "#4d7c0f",
      char: "I",
      faces: coreFaces,
    },
    {
      name: "Baggy Cargo Pants (Deep Shadow)",
      color: "#365314",
      char: ":",
      faces: shadowFaces,
    },
    {
      name: "Side 3D Cargo Pockets",
      color: "#3f6212",
      char: "#",
      faces: pocketFaces,
    },
    {
      name: "Reflective Streetwear Piping",
      color: "#fef08a",
      char: "|",
      faces: neonPipingFaces,
    },
  );
}

buildBaggyCargoPants(14, 14);

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

// 2. Retro Neck Headphones (Band + Cyan Cushioned Earcups resting on Collarbones)
addRibbonTube("Headphone Neck Band", "#27272a", "=", 12, 0.08, (t) => {
  const angle = (t - 0.5) * Math.PI * 1.4;
  return [Math.sin(angle) * 0.28, 0.72, Math.cos(angle) * 0.26 + 0.04];
});
addRibbonTube("Headphone Earcups", "#22d3ee", "@", 6, 0.14, (t) => {
  const side = t < 0.5 ? -0.26 : 0.26;
  return [side, 0.65, 0.36 + (t % 0.5) * 0.12];
});

// 3. Webbed Canvas Skate Belt & Hanging Neon Belt Tail
addRibbonTube("Webbed Skate Belt", "#f8fafc", "=", 16, 0.1, (t) => {
  const angle = (t - 0.5) * Math.PI * 2.0;
  return [Math.sin(angle) * 0.9, -1.72, Math.cos(angle) * 0.54];
});
addRibbonTube("Hanging Canvas Belt Tail", "#22d3ee", "!", 10, 0.08, (t) => {
  return [0.22 + Math.sin(t * Math.PI) * 0.06, -1.75 - t * 1.55, 0.6];
});

// 4. Skater Carabiner & Heavy Pocket Wallet Chain (Right Hip)
addRibbonTube("Skater Carabiner Chain", "#e2e8f0", "o", 14, 0.09, (t) => {
  const x = 0.35 + t * 0.62;
  const y = -1.75 - Math.sin(t * Math.PI) * 1.35 - t * 0.35;
  const z = 0.56 - t * 0.25 + Math.sin(t * Math.PI) * 0.14;
  return [x, y, z];
});

// ============================================================================
// SLOUCHY STREETWEAR BEANIE + SILKY TWO-TONE BLONDE & CYAN TWIN-TAILS
// ============================================================================
const SKATER_HAIR_PALETTE = {
  gloss: "#ffffff", // Pure white silk shine
  highlight: "#fef08a", // Silky platinum-blonde locks
  mid: "#facc15", // Warm golden-blonde core
  neonTip: "#22d3ee", // Electric cyan dyed dip-tips!
  shadow: "#a16207", // Deep amber-gold inner strand grooves
};

function buildSkaterSilkyHair(
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
  const neonTipFaces: Face[] = [];
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
      const haloCenter = 0.26 + lockWave * 0.07;

      // 1. Dyed Electric-Cyan Dip Tips at the bottom of locks & twin-tails
      if (v > 0.68) {
        neonTipFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 2. Specular Angel-Halo Gloss
      else if (Math.abs(v - haloCenter) < 0.1 && lockWave > -0.15) {
        glossFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 3. Silky Platinum Strand Ridges
      else if (lockWave > 0.15) {
        highlightFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 4. Recessed Grooves
      else if (lockWave < -0.38) {
        shadowFaces.push([tl, bl, tr], [tr, bl, br]);
      }
      // 5. Core Blonde Body
      else {
        midFaces.push([tl, bl, tr], [tr, bl, br]);
      }
    }
  }

  if (glossFaces.length)
    extraMeshes.push({
      name: `${baseName} Gloss`,
      color: SKATER_HAIR_PALETTE.gloss,
      char: "~",
      faces: glossFaces,
    });
  if (highlightFaces.length)
    extraMeshes.push({
      name: `${baseName} Platinum`,
      color: SKATER_HAIR_PALETTE.highlight,
      char: primaryChar,
      faces: highlightFaces,
    });
  if (midFaces.length)
    extraMeshes.push({
      name: `${baseName} Core`,
      color: SKATER_HAIR_PALETTE.mid,
      char: primaryChar,
      faces: midFaces,
    });
  if (neonTipFaces.length)
    extraMeshes.push({
      name: `${baseName} Cyan Tips`,
      color: SKATER_HAIR_PALETTE.neonTip,
      char: primaryChar,
      faces: neonTipFaces,
    });
  if (shadowFaces.length)
    extraMeshes.push({
      name: `${baseName} Groove`,
      color: SKATER_HAIR_PALETTE.shadow,
      char: ":",
      faces: shadowFaces,
    });
}

// 1. Ribbed Streetwear Skater Beanie (Sits perched on top of crown)
function buildSkaterBeanie(cols: number, rows: number) {
  const start = currentIdx;
  const cuffFaces: Face[] = [];
  const domeFaces: Face[] = [];

  for (let r = 0; r <= rows; r++) {
    const v = r / rows;
    for (let c = 0; c <= cols; c++) {
      const u = c / cols;
      const theta = (u - 0.5) * Math.PI * 2.0;
      const phi = v * Math.PI * 0.48;
      // Folded thick knit cuff at bottom (v < 0.3)
      const cuffBulge = v < 0.3 ? 0.06 : 0.0;
      const rDome = 0.62 + cuffBulge;
      const x = Math.sin(theta) * Math.cos(phi) * rDome;
      const y = 1.78 + Math.sin(phi) * rDome * 0.95 - Math.cos(theta) * 0.08;
      const z = -0.04 + Math.cos(theta) * Math.cos(phi) * rDome - v * 0.14; // Slouches slightly back
      extraVerts.push([x, y, z]);
    }
  }
  currentIdx += (rows + 1) * (cols + 1);

  for (let r = 0; r < rows; r++) {
    const v = (r + 0.5) / rows;
    for (let c = 0; c < cols; c++) {
      const tl = start + r * (cols + 1) + c;
      const tr = tl + 1;
      const bl = start + (r + 1) * (cols + 1) + c;
      const br = bl + 1;
      if (v < 0.3) {
        cuffFaces.push([tl, bl, tr], [tr, bl, br]);
      } else {
        domeFaces.push([tl, bl, tr], [tr, bl, br]);
      }
    }
  }

  extraMeshes.push(
    {
      name: "Beanie Folded Ribbed Cuff",
      color: "#f43f5e",
      char: "=",
      faces: cuffFaces,
    },
    {
      name: "Beanie Slouch Dome",
      color: "#be123c",
      char: "#",
      faces: domeFaces,
    },
  );
}

buildSkaterBeanie(16, 6);

// 2. Silky Side-Swept Skater Bangs peeking out from under the Beanie
buildSkaterSilkyHair("Skater Bangs", 14, 5, 5, "/", (u, v) => {
  const centered = (u - 0.5) * 2;
  const sideSweep = 0.18 + Math.pow(u, 1.3) * 0.36; // Asymmetric side-swept fringe
  const wisp = Math.sin(u * Math.PI * 10) * 0.05 * v;
  const x = centered * 0.52;
  const y = 1.88 - v * sideSweep + wisp;
  const z = 0.68 + Math.cos(centered * Math.PI * 0.5) * 0.06;
  return [x, y, z];
});

// 3. blunt Hime-Cut Cheek Locks framing the jawline
buildSkaterSilkyHair("Left Hime Cheek Lock", 6, 8, 3, "|", (u, v) => {
  const x = -0.46 + (u - 0.5) * 0.18;
  const y = 1.78 - v * 0.85;
  const z = 0.52 - u * 0.25;
  return [x, y, z];
});
buildSkaterSilkyHair("Right Hime Cheek Lock", 6, 8, 3, "|", (u, v) => {
  const x = 0.46 + (u - 0.5) * 0.18;
  const y = 1.78 - v * 0.85;
  const z = 0.52 - (1 - u) * 0.25;
  return [x, y, z];
});

// 4. High Bouncy Left Twin-Tail (Arcs out and cascades down with Cyan Dip-Tips!)
buildSkaterSilkyHair("Left Skater Twin-Tail", 10, 14, 4, "\\", (u, v) => {
  const angle = (u - 0.5) * Math.PI * 1.4;
  const fountainArc = Math.sin(v * Math.PI * 0.75) * 0.55;
  const flareRadius = 0.14 + v * 0.22;
  const featherTip = Math.abs(((u * 4) % 1) - 0.5) * 0.24 * Math.pow(v, 1.5);
  const x = -0.52 - fountainArc + Math.sin(angle) * flareRadius;
  const y =
    1.85 +
    Math.sin(v * Math.PI * 0.35) * 0.18 -
    Math.pow(v, 1.25) * 2.35 +
    featherTip;
  const z = -0.05 + Math.cos(angle) * flareRadius;
  return [x, y, z];
});

// 5. High Bouncy Right Twin-Tail (Mirrored)
buildSkaterSilkyHair("Right Skater Twin-Tail", 10, 14, 4, "/", (u, v) => {
  const angle = (u - 0.5) * Math.PI * 1.4;
  const fountainArc = Math.sin(v * Math.PI * 0.75) * 0.55;
  const flareRadius = 0.14 + v * 0.22;
  const featherTip = Math.abs(((u * 4) % 1) - 0.5) * 0.24 * Math.pow(v, 1.5);
  const x = 0.52 + fountainArc + Math.sin(angle) * flareRadius;
  const y =
    1.85 +
    Math.sin(v * Math.PI * 0.35) * 0.18 -
    Math.pow(v, 1.25) * 2.35 +
    featherTip;
  const z = -0.05 + Math.cos(angle) * flareRadius;
  return [x, y, z];
});

export const skaterGirlVertices: Vec3[] = [
  ...baseSkaterGirlVertices,
  ...extraVerts,
];
export const skaterGirlMeshes: MeshGroup[] = [
  ...baseSkaterGirlMeshes,
  ...extraMeshes,
];
