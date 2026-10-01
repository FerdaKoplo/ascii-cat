// point for the 3d spaces

export type Vec3 = [number, number, number];
export const catVertices: Vec3[] = [
  // two dimensional array call for vertices

  [0.0, 2.2, 0.2], // 0: Top head
  [0.0, 1.0, 1.0], // 1: Forehead
  [0.0, 0.0, 1.1], // 2: Bridge of nose
  [0.0, -0.5, 1.3], // 3: Nose tip
  [0.0, -1.0, 1.1], // 4: Mouth
  [0.0, -1.8, 0.5], // 5: Chin

  // LEFT EYE (Indices 6 to 10)
  [-0.8, 0.8, 1.0], // 6: Eye Top
  [-1.6, 0.2, 0.8], // 7: Eye Outer
  [-0.8, -0.4, 1.0], // 8: Eye Bottom
  [-0.3, 0.2, 1.1], // 9: Eye Inner
  [-0.9, 0.2, 1.0], // 10: Eye Center

  // RIGHT EYE (Indices 11 to 15)
  [0.8, 0.8, 1.0], // 11: Eye Top
  [1.6, 0.2, 0.8], // 12: Eye Outer
  [0.8, -0.4, 1.0], // 13: Eye Bottom
  [0.3, 0.2, 1.1], // 14: Eye Inner
  [0.9, 0.2, 1.0], // 15: Eye Center

  // LEFT CHEEK TUFTS (Indices 16 to 17)
  [-2.6, 0.4, 0.2], // 16: Upper tuft
  [-2.4, -0.8, 0.2], // 17: Lower tuft

  // RIGHT CHEEK TUFTS (Indices 18 to 19)
  [2.6, 0.4, 0.2], // 18: Upper tuft
  [2.4, -0.8, 0.2], // 19: Lower tuft

  // LEFT EAR (Indices 20 to 22)
  [-1.0, 1.8, 0.2], // 20: Inner base
  [-2.0, 1.2, 0.0], // 21: Outer base
  [-1.8, 3.0, 0.0], // 22: Ear tip

  // RIGHT EAR (Indices 23 to 25)
  [1.0, 1.8, 0.2], // 23: Inner base
  [2.0, 1.2, 0.0], // 24: Outer base
  [1.8, 3.0, 0.0], // 25: Ear tip

  // BACK OF HEAD (Indices 26 to 29)
  [0.0, 1.5, -1.5], // 26: Back top
  [-1.5, 0.0, -1.5], // 27: Back left
  [1.5, 0.0, -1.5], // 28: Back right
  [0.0, -1.0, -1.5],

  [0.0, -2.0, 1.0], // 30: Neck Front
  [-1.0, -2.0, 0.0], // 31: Neck Left
  [1.0, -2.0, 0.0], // 32: Neck Right
  [0.0, -2.0, -1.0], // 33: Neck Back
  [0.0, -2.8, 1.5], // 34: Chest Front
  [-1.5, -2.8, 0.0], // 35: Chest Left
  [1.5, -2.8, 0.0], // 36: Chest Right
  [0.0, -2.8, -1.5], // 37: Chest Back
  [0.0, -3.5, 1.6], // 38: Waist Top Front
  [-1.6, -3.5, 0.0], // 39: Waist Top Left
  [1.6, -3.5, 0.0], // 40: Waist Top Right
  [0.0, -3.5, -1.6], // 41: Waist Top Back
  [0.0, -4.5, 1.6], // 42: Waist Bot Front
  [-1.6, -4.5, 0.0], // 43: Waist Bot Left
  [1.6, -4.5, 0.0], // 44: Waist Bot Right
  [0.0, -4.5, -1.6], // 45: Waist Bot Back
  [-0.8, -5.5, 0.5], // 46: Left Foot
  [0.8, -5.5, 0.5], // 47: Right Foot
  [0.0, -4.8, 0.0], // 48: Crotch
  [0.0, -2.4, 1.8], // 49: Bell

  [-1.8, -2.6, 0.5], // 50: Shoulder Top
  [-1.8, -3.1, 0.2], // 51: Shoulder Bot
  [-2.5, -3.2, 0.6], // 52: Wrist Top
  [-2.3, -3.6, 0.3], // 53: Wrist Bot
  [-2.8, -3.3, 1.0], // 54: Paw Top
  [-3.1, -3.7, 0.8], // 55: Paw Outer Tip
  [-2.6, -4.1, 0.7], // 56: Paw Bot
  [-2.2, -3.8, 0.9], // 57: Paw Inner Tip

  [1.8, -2.6, 0.5], // 58: Shoulder Top
  [1.8, -3.1, 0.2], // 59: Shoulder Bot
  [2.5, -3.2, 0.6], // 60: Wrist Top
  [2.3, -3.6, 0.3], // 61: Wrist Bot
  [2.8, -3.3, 1.0], // 62: Paw Top
  [3.1, -3.7, 0.8], // 63: Paw Outer Tip
  [2.6, -4.1, 0.7], // 64: Paw Bot
  [2.2, -3.8, 0.9], // 65: Paw Inner Tip

  [-1.0, -4.8, 1.0], // 66: Left Knee Front
  [-1.0, -4.8, -0.2], // 67: Left Knee Back

  [1.0, -4.8, 1.0], // 68: Right Knee Front
  [1.0, -4.8, -0.2], // 69: Right Knee Back

  [-1.1, -5.5, 1.3], // 70: Left Toe Front
  [-1.5, -5.5, 0.8], // 71: Left Toe Outer
  [-0.6, -5.5, 0.2], // 72: Left Heel
  [-0.4, -5.5, 0.8],

  [1.1, -5.5, 1.3], // 73: Right Toe Front
  [1.5, -5.5, 0.8], // 74: Right Toe Outer
  [0.6, -5.5, 0.2], // 75 : Right Heel
  [0.4, -5.5, 0.8],
];

export type Face = [number, number, number];

export const catFaces: Face[] = [
  [10, 6, 7],
  [10, 7, 8],
  [10, 8, 9],
  [10, 9, 6],
  [15, 11, 12],
  [15, 12, 13],
  [15, 13, 14],
  [15, 14, 11],
  // PINK MOUTH (8 to 11)
  [3, 8, 4],
  [3, 4, 13],
  [4, 8, 5],
  [4, 5, 13],
  // PINK INNER EARS (12 to 13)
  [20, 22, 21],
  [23, 24, 25],
  // CYAN BELL (14 to 17)
  [30, 31, 49],
  [30, 49, 32],
  [34, 49, 31],
  [34, 32, 49],
  // WHITE CHEST (18 to 21)
  [30, 31, 35],
  [30, 35, 34],
  [30, 34, 36],
  [30, 36, 32],
  [52, 54, 55],
  [52, 55, 53],
  [53, 55, 56],
  [53, 56, 57],
  [52, 53, 57],
  [52, 57, 54],
  [54, 57, 56],
  [54, 56, 55], // Left Paw
  [60, 62, 63],
  [60, 63, 61],
  [61, 63, 64],
  [61, 64, 65],
  [60, 61, 65],
  [60, 65, 62],
  [62, 65, 64],
  [62, 64, 63], // Right Paw

  // WHITE 3D FEET (38 to 45)
  [70, 71, 72],
  [70, 72, 77], // Split Base Plate
  [66, 70, 71],
  [66, 71, 67], // Front & Outer-Upper
  [67, 71, 72], // Outer-Lower
  [66, 76, 70],
  [66, 67, 76], // Inner-Front & Inner-Upper
  [67, 72, 76], // Inner-Lower

  [73, 74, 75],
  [73, 75, 77], // Split Base Plate
  [68, 73, 74],
  [68, 74, 69], // Front & Outer-Upper
  [69, 74, 75], // Outer-Lower
  [68, 77, 73],
  [68, 69, 77], // Inner-Front & Inner-Upper
  [69, 75, 77], // Inner-Lower

  // YELLOW BELLY BAND (46 to 53)
  [38, 39, 43],
  [38, 43, 42],
  [38, 42, 44],
  [38, 44, 40],
  [40, 44, 45],
  [40, 45, 41],
  [41, 45, 43],
  [41, 43, 39],

  [5, 30, 1], // Chin to front neck
  [5, 31, 30], // Chin to left-front neck
  [17, 31, 5], // Left cheek to left-front neck
  [17, 33, 31], // Left cheek to left-back neck
  [19, 30, 32], // Right cheek to right-front neck
  [19, 32, 33], // Right cheek to right-back neck
  [29, 33, 27], // Back head to back neck left
  [29, 28, 33], // Back head to back neck right
  [31, 35, 33], // Neck left to chest left
  [32, 33, 36], // Neck right to chest right

  // Head
  [1, 6, 9],
  [1, 9, 2],
  [1, 2, 14],
  [1, 14, 11],
  [1, 11, 0],
  [1, 0, 6],
  [2, 9, 3],
  [2, 3, 14],
  [9, 8, 3],
  [14, 3, 13],
  [6, 20, 21],
  [6, 21, 7],
  [7, 21, 16],
  [7, 16, 17],
  [7, 17, 8],
  [8, 17, 5],
  [11, 24, 23],
  [11, 12, 24],
  [12, 18, 24],
  [12, 19, 18],
  [12, 13, 19],
  [13, 5, 19],
  [0, 20, 6],
  [0, 11, 23],
  [0, 26, 20],
  [0, 23, 26],
  [20, 26, 22],
  [21, 22, 27],
  [22, 26, 27],
  [23, 25, 26],
  [24, 28, 25],
  [25, 26, 28],
  [26, 27, 28],
  [27, 29, 28],
  [27, 16, 29],
  [16, 17, 29],
  [17, 5, 29],
  [28, 29, 18],
  [18, 29, 19],
  [19, 29, 5],

  // Body Back & Sides
  [31, 35, 37],
  [31, 37, 33],
  [32, 33, 37],
  [32, 37, 36],
  [34, 35, 39],
  [34, 39, 38],
  [34, 38, 40],
  [34, 40, 36],
  [36, 40, 41],
  [36, 41, 37],
  [37, 41, 39],
  [37, 39, 35],

  // Detailed Arms & Shoulders
  [35, 50, 39],
  [39, 50, 51],
  [50, 52, 51],
  [51, 52, 53],
  [35, 52, 50],
  [39, 51, 53],
  [36, 58, 40],
  [40, 58, 59],
  [58, 60, 59],
  [59, 60, 61],
  [36, 60, 58],
  [40, 59, 61],

  // Thick 3D Legs
  [43, 66, 42], // Front-Left Panel
  [42, 66, 48], // Front-Inner Panel
  [43, 67, 66], // Outer Panel
  [43, 45, 67], // Back-Outer Panel
  [45, 48, 67], // Back-Inner Panel
  [48, 66, 67], // Inner seam

  // Right Leg (Connecting Waist 42,44,45 to Knee 68,69)
  [44, 42, 68], // Front-Right Panel
  [42, 48, 68], // Front-Inner Panel
  [44, 68, 69], // Outer Panel
  [44, 69, 45], // Back-Outer Panel
  [45, 69, 48], // Back-Inner Panel
  [48, 69, 68], // Inner seam
];

export function dotProduct(v1: Vec3, v2: Vec3): number {
  return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

export function normalize(v: Vec3): Vec3 {
  const length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  if (length === 0) return [0, 0, 0]; // prevent dividing by zero

  return [v[0] / length, v[1] / length, v[2] / length];
}

export function calculateBrightness(
  faceNormal: Vec3,
  lightDirection: Vec3,
): number {
  const nFace = normalize(faceNormal);
  const nLight = normalize(lightDirection);

  const dot = dotProduct(nFace, nLight);

  return Math.max(0, dot);
}
