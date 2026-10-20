import type { Vec3 } from "../libs/skeleton.lib";

export const baseSkaterGirlVertices: Vec3[] = [
  [0.0, 1.12, 0.58], // 0: Sharp anime V-chin tip
  [-0.24, 1.24, 0.48], // 1: Jaw L
  [0.24, 1.24, 0.48], // 2: Jaw R
  [0.0, 1.26, 0.62], // 3: Lower lip
  [0.0, 1.3, 0.63], // 4: Mouth center
  [0.0, 1.34, 0.64], // 5: Upper lip
  [-0.1, 1.3, 0.6], // 6: Mouth corner L
  [0.1, 1.3, 0.6], // 7: Mouth corner R
  [-0.36, 1.46, 0.5], // 8: Cheek L
  [0.36, 1.46, 0.5], // 9: Cheek R
  [0.0, 1.48, 0.68], // 10: Button nose tip
  [0.0, 1.68, 0.62], // 11: Nose bridge / Glabella
  [0.0, 1.96, 0.56], // 12: Forehead center
  [-0.14, 1.62, 0.61], // 13: Eye L inner
  [-0.42, 1.65, 0.52], // 14: Eye L outer
  [-0.28, 1.62, 0.65], // 15: Iris L center
  [-0.28, 1.73, 0.62], // 16: Eye L upper lash
  [-0.28, 1.52, 0.61], // 17: Eye L lower lid
  [0.14, 1.62, 0.61], // 18: Eye R inner
  [0.42, 1.65, 0.52], // 19: Eye R outer
  [0.28, 1.62, 0.65], // 20: Iris R center
  [0.28, 1.73, 0.62], // 21: Eye R upper lash
  [0.28, 1.52, 0.61], // 22: Eye R lower lid
  [-0.14, 1.82, 0.62], // 23: Brow L inner
  [-0.44, 1.85, 0.54], // 24: Brow L outer
  [0.14, 1.82, 0.62], // 25: Brow R inner
  [0.44, 1.85, 0.54], // 26: Brow R outer
  [-0.46, 1.92, 0.35], // 27: Temple L
  [0.46, 1.92, 0.35], // 28: Temple R
  [-0.48, 1.55, 0.05], // 29: Ear L
  [0.48, 1.55, 0.05], // 30: Ear R
  [0.0, 0.82, 0.18], // 31: Neck front center
  [-0.18, 0.85, 0.12], // 32: Neck L
  [0.18, 0.85, 0.12], // 33: Neck R
  [-0.34, 0.62, 0.25], // 34: Collarbone L
  [0.34, 0.62, 0.25], // 35: Collarbone R
  [0.0, 1.48, 0.75], // 36: Nose stud / Bandaid center
  [-0.28, 1.48, 0.7], // 37: Nose Bandaid L
  [0.28, 1.48, 0.7], // 38: Nose Bandaid R
  [-0.14, 1.22, 0.74], // 39: Lip ring
  [0.0, 1.56, 0.74], // 40: Nose Bandaid top

  // =========================================================================
  // 2. ANIME HOURGLASS BUST & RIBCAGE (41-56)
  // =========================================================================
  [0.0, 0.62, -0.22], // 41: Neck base back
  [-0.18, 0.95, -0.18], // 42: Neck top back L
  [0.18, 0.95, -0.18], // 43: Neck top back R
  [0.0, 0.45, 0.36], // 44: Crew-neck collar front center
  [-0.58, 0.05, 0.65], // 45: Bust apex L
  [0.58, 0.05, 0.65], // 46: Bust apex R
  [-0.65, 0.35, 0.38], // 47: Upper chest L
  [0.65, 0.35, 0.38], // 48: Upper chest R
  [-0.48, -0.45, 0.44], // 49: High Crop-Top Hem L
  [0.48, -0.45, 0.44], // 50: High Crop-Top Hem R
  [0.0, -0.42, 0.48], // 51: High Crop-Top Hem Center
  [-0.62, 0.1, -0.35], // 52: Upper back L
  [0.62, 0.1, -0.35], // 53: Upper back R
  [0.0, -0.42, -0.32], // 54: Crop-Top Back Hem Center
  [0.0, 1.65, -0.52], // 55: Back of skull
  [0.0, 2.08, 0.05], // 56: Crown of skull

  // =========================================================================
  // 3. A-POSE ARMS & BAGGY CARGO UPPER THIGHS (57-97)
  // =========================================================================
  [-1.12, 0.42, 0.24], // 57: Raglan sleeve cuff L top-front
  [-1.12, 0.42, -0.24], // 58: Raglan sleeve cuff L top-back
  [-1.02, 0.1, 0.24], // 59: Raglan sleeve cuff L bottom-front
  [-1.02, 0.1, -0.24], // 60: Raglan sleeve cuff L bottom-back
  [1.12, 0.42, 0.24], // 61: Raglan sleeve cuff R top-front
  [1.12, 0.42, -0.24], // 62: Raglan sleeve cuff R top-back
  [1.02, 0.1, 0.24], // 63: Raglan sleeve cuff R bottom-front
  [1.02, 0.1, -0.24], // 64: Raglan sleeve cuff R bottom-back
  [-1.95, 0.08, 0.22], // 65: Elbow L top-front
  [-1.95, 0.08, -0.22], // 66: Elbow L top-back
  [-1.85, -0.24, 0.22], // 67: Elbow L bottom-front
  [-1.85, -0.24, -0.22], // 68: Elbow L bottom-back
  [1.95, 0.08, 0.22], // 69: Elbow R top-front
  [1.95, 0.08, -0.22], // 70: Elbow R top-back
  [1.85, -0.24, 0.22], // 71: Elbow R bottom-front
  [1.85, -0.24, -0.22], // 72: Elbow R bottom-back

  // Baggy Upper Thighs (73-80)
  [-0.92, -2.05, 0.34], // 73: Cargo Thigh top L outer
  [-0.56, -2.05, 0.5], // 74: Cargo Thigh top L front
  [-0.92, -2.05, -0.34], // 75: Cargo Thigh top L back
  [-0.24, -2.05, 0.0], // 76: Cargo Thigh top L inner
  [0.56, -2.05, 0.5], // 77: Cargo Thigh top R front
  [0.92, -2.05, 0.34], // 78: Cargo Thigh top R outer
  [0.24, -2.05, 0.0], // 79: Cargo Thigh top R inner
  [0.92, -2.05, -0.34], // 80: Cargo Thigh top R back

  // Graphic Tee Front Decal & Exposed Toned Abs (81-86)
  [-0.26, 0.22, 0.64], // 81: Graphic Logo top L
  [0.26, 0.22, 0.64], // 82: Graphic Logo top R
  [-0.22, -0.25, 0.56], // 83: Graphic Logo bottom L
  [0.22, -0.25, 0.56], // 84: Graphic Logo bottom R
  [-0.52, -1.45, 0.48], // 85: Lower Ab / Hipbone L
  [0.52, -1.45, 0.48], // 86: Lower Ab / Hipbone R

  // Hands, Navel Piercing & Ear Gauges (87-97)
  [-3.25, -0.62, 0.24], // 87: Hand L bottom-front
  [-3.25, -0.62, -0.24], // 88: Hand L bottom-back
  [3.25, -0.62, 0.24], // 89: Hand R bottom-front
  [3.25, -0.62, -0.24], // 90: Hand R bottom-back
  [0.0, -1.18, 0.48], // 91: Belly button piercing top
  [-0.1, -1.3, 0.48], // 92: Belly button gem L
  [0.1, -1.3, 0.48], // 93: Belly button gem R
  [-0.56, 1.58, 0.15], // 94: Ear Gauge Hoop L top
  [-0.56, 1.4, 0.15], // 95: Ear Gauge Hoop L bottom
  [0.56, 1.58, 0.15], // 96: Ear Gauge Hoop R top
  [0.56, 1.4, 0.15], // 97: Ear Gauge Hoop R bottom

  // =========================================================================
  // 4. TORSO, EXPOSED MIDRIFF WAIST, BAGGY KNEES & SKATE SHOES (98-167)
  // =========================================================================
  [0.0, 0.05, 0.62], // 98: Bust center
  [0.0, 0.45, -0.35], // 99: Upper back center
  [-0.82, 0.52, 0.0], // 100: Shoulder joint L
  [0.82, 0.52, 0.0], // 101: Shoulder joint R

  // Snatched Exposed Midriff Waist (102-106)
  [-0.29, -0.95, 0.34], // 102: Bare Waist pinch front L
  [0.29, -0.95, 0.34], // 103: Bare Waist pinch front R
  [-0.27, -0.95, -0.28], // 104: Bare Waist pinch back L
  [0.27, -0.95, -0.28], // 105: Bare Waist pinch back R
  [0.0, -1.55, 0.46], // 106: Low-rise Cargo Button fly center

  // Low-Rise Baggy Cargo Hip Ring (107-112)
  [-0.86, -1.78, 0.52], // 107: Hip flare front L
  [0.86, -1.78, 0.52], // 108: Hip flare front R
  [-0.96, -1.72, 0.0], // 109: Hip flare side L
  [0.96, -1.72, 0.0], // 110: Hip flare side R
  [-0.86, -1.78, -0.46], // 111: Hip flare back L
  [0.86, -1.78, -0.46], // 112: Hip flare back R

  // Wide Baggy Cargo Knees (113-120)
  [-1.02, -4.1, 0.28], // 113: Baggy Knee L outer
  [-0.6, -4.1, 0.52], // 114: Baggy Knee L front
  [-1.02, -4.1, -0.32], // 115: Baggy Knee L back
  [-0.24, -4.1, 0.0], // 116: Baggy Knee L inner
  [0.6, -4.1, 0.52], // 117: Baggy Knee R front
  [1.02, -4.1, 0.28], // 118: Baggy Knee R outer
  [0.24, -4.1, 0.0], // 119: Baggy Knee R inner
  [1.02, -4.1, -0.32], // 120: Baggy Knee R back

  // Stacked Parachute Cargo Cuffs at Ankles (121-128)
  [-1.1, -6.45, 0.38], // 121: Cargo Cuff L outer
  [-0.64, -6.45, 0.62], // 122: Cargo Cuff L front
  [-1.1, -6.45, -0.4], // 123: Cargo Cuff L back
  [-0.28, -6.45, 0.0], // 124: Cargo Cuff L inner
  [0.64, -6.45, 0.62], // 125: Cargo Cuff R front
  [1.1, -6.45, 0.38], // 126: Cargo Cuff R outer
  [0.28, -6.45, 0.0], // 127: Cargo Cuff R inner
  [1.1, -6.45, -0.4], // 128: Cargo Cuff R back

  // Wrists (129-136)
  [-2.75, -0.22, 0.22], // 129: Wrist L top-front
  [-2.65, -0.54, 0.22], // 130: Wrist L bottom-front
  [-2.75, -0.22, -0.22], // 131: Wrist L top-back
  [-2.65, -0.54, -0.22], // 132: Wrist L bottom-back
  [2.75, -0.22, 0.22], // 133: Wrist R top-front
  [2.65, -0.54, 0.22], // 134: Wrist R bottom-front
  [2.75, -0.22, -0.22], // 135: Wrist R top-back
  [2.65, -0.54, -0.22], // 136: Wrist R bottom-back

  // Hands Top Corners (137-140)
  [-3.3, -0.26, 0.24], // 137: Hand L top-front
  [-3.3, -0.26, -0.24], // 138: Hand L top-back
  [3.3, -0.26, 0.24], // 139: Hand R top-front
  [3.3, -0.26, -0.24], // 140: Hand R top-back

  // Raglan Crewneck Collar Trim (141-149)
  [0.0, 0.32, 0.56], // 141: Collar front dip
  [-0.32, 0.5, 0.45], // 142: Collar rim L
  [0.32, 0.5, 0.45], // 143: Collar rim R
  [-0.18, 0.08, 0.66], // 144: Graphic Print accent L
  [0.18, 0.08, 0.66], // 145: Graphic Print accent R
  [-0.85, 0.56, 0.22], // 146: Raglan seam shoulder L
  [0.85, 0.56, 0.22], // 147: Raglan seam shoulder R
  [-0.45, 0.48, -0.36], // 148: Collar back L
  [0.45, 0.48, -0.36], // 149: Collar back R

  // Chunky Skate Sneakers — Wide flat gum/white soles (150-157)
  [-1.08, -7.2, 0.52], // 150: Sneaker Sole L outer
  [-0.64, -7.2, 0.85], // 151: Sneaker Toe L front
  [-1.08, -7.2, -0.45], // 152: Sneaker Heel L back
  [-0.28, -7.2, 0.05], // 153: Sneaker Sole L inner
  [0.64, -7.2, 0.85], // 154: Sneaker Toe R front
  [1.08, -7.2, 0.52], // 155: Sneaker Sole R outer
  [0.28, -7.2, 0.05], // 156: Sneaker Sole R inner
  [1.08, -7.2, -0.45], // 157: Sneaker Heel R back

  // Terry-Cloth Skate Sweatbands on Wrists (158-165)
  [-2.5, -0.1, 0.28], // 158: Sweatband L top
  [-2.42, -0.52, 0.28], // 159: Sweatband L bottom
  [-2.5, -0.1, -0.28], // 160: Sweatband L back-top
  [-2.42, -0.52, -0.28], // 161: Sweatband L back-bottom
  [2.5, -0.1, 0.28], // 162: Sweatband R top
  [2.42, -0.52, 0.28], // 163: Sweatband R bottom
  [2.5, -0.1, -0.28], // 164: Sweatband R back-top
  [2.42, -0.52, -0.28], // 165: Sweatband R back-bottom
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
