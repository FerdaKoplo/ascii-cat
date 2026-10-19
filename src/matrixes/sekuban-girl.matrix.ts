import type { Vec3 } from "../libs/skeleton.lib";
export const baseSekubanGirlVertices: Vec3[] = [
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
  // Pushed Z forward so facial piercings always render on top of skin/bangs
  [0.0, 1.42, 0.78], // 36: Septum ring tip
  [-0.42, 1.86, 0.72], // 37: Left Eyebrow ring tip
  [0.14, 1.22, 0.74], // 38: Snakebite Lip ring L
  [-0.14, 1.22, 0.74], // 39: Snakebite Lip ring R
  [0.0, 1.7, 0.76], // 40: Nose Bridge piercing

  // =========================================================================
  // 2. ANIME HOURGLASS BUST & RIBCAGE (41-56)
  // =========================================================================
  [0.0, 0.62, -0.22], // 41: Neck base back
  [-0.18, 0.95, -0.18], // 42: Neck top back L
  [0.18, 0.95, -0.18], // 43: Neck top back R
  [0.0, 0.15, 0.38], // 44: V-Neck sternum center
  [-0.58, 0.05, 0.65], // 45: Bust apex L
  [0.58, 0.05, 0.65], // 46: Bust apex R
  [-0.65, 0.35, 0.38], // 47: Upper chest L
  [0.65, 0.35, 0.38], // 48: Upper chest R
  [-0.5, -0.35, 0.45], // 49: Underbust L
  [0.5, -0.35, 0.45], // 50: Underbust R
  [0.0, -0.35, 0.48], // 51: Underbust center
  [-0.62, 0.1, -0.35], // 52: Upper back L
  [0.62, 0.1, -0.35], // 53: Upper back R
  [0.0, -0.35, -0.32], // 54: Mid back center
  [0.0, 1.65, -0.52], // 55: Back of skull
  [0.0, 2.08, 0.05], // 56: Crown of skull

  // =========================================================================
  // 3. A-POSE ARMS & SEPARATED 3D CYLINDER LEGS (57-97)
  // =========================================================================
  [-1.12, 0.42, 0.24], // 57: Cap cuff L top-front
  [-1.12, 0.42, -0.24], // 58: Cap cuff L top-back
  [-1.02, 0.1, 0.24], // 59: Cap cuff L bottom-front
  [-1.02, 0.1, -0.24], // 60: Cap cuff L bottom-back
  [1.12, 0.42, 0.24], // 61: Cap cuff R top-front
  [1.12, 0.42, -0.24], // 62: Cap cuff R top-back
  [1.02, 0.1, 0.24], // 63: Cap cuff R bottom-front
  [1.02, 0.1, -0.24], // 64: Cap cuff R bottom-back
  [-1.95, 0.08, 0.22], // 65: Elbow L top-front
  [-1.95, 0.08, -0.22], // 66: Elbow L top-back
  [-1.85, -0.24, 0.22], // 67: Elbow L bottom-front
  [-1.85, -0.24, -0.22], // 68: Elbow L bottom-back
  [1.95, 0.08, 0.22], // 69: Elbow R top-front
  [1.95, 0.08, -0.22], // 70: Elbow R top-back
  [1.85, -0.24, 0.22], // 71: Elbow R bottom-front
  [1.85, -0.24, -0.22], // 72: Elbow R bottom-back

  // Upper Thighs — Wider inner gap (±0.28) so legs never merge into one block!
  [-0.84, -2.05, 0.28], // 73: Thigh top L outer
  [-0.54, -2.05, 0.44], // 74: Thigh top L front-crest
  [-0.84, -2.05, -0.28], // 75: Thigh top L back-outer
  [-0.28, -2.05, 0.0], // 76: Thigh top L inner
  [0.54, -2.05, 0.44], // 77: Thigh top R front-crest
  [0.84, -2.05, 0.28], // 78: Thigh top R outer
  [0.28, -2.05, 0.0], // 79: Thigh top R inner
  [0.84, -2.05, -0.28], // 80: Thigh top R back-outer

  // Double-Row Silver Corset Eyelets (81-86)
  [-0.14, 0.02, 0.62], // 81: Corset eyelet top L
  [0.14, 0.02, 0.62], // 82: Corset eyelet top R
  [-0.12, -1.25, 0.44], // 83: Corset eyelet bottom L
  [0.12, -1.25, 0.44], // 84: Corset eyelet bottom R
  [-0.55, -1.45, 0.52], // 85: Exposed V-hip skin L
  [0.55, -1.45, 0.52], // 86: Exposed V-hip skin R

  // Hand Bottom Corners & Belly Piercing (87-97)
  [-3.25, -0.62, 0.24], // 87: Hand L bottom-front
  [-3.25, -0.62, -0.24], // 88: Hand L bottom-back
  [3.25, -0.62, 0.24], // 89: Hand R bottom-front
  [3.25, -0.62, -0.24], // 90: Hand R bottom-back
  [0.0, -1.28, 0.54], // 91: Navel / Belly button piercing center
  [-0.12, -1.38, 0.52], // 92: Navel gem L
  [0.12, -1.38, 0.52], // 93: Navel gem R
  [-0.56, 1.62, 0.15], // 94: Industrial Ear Cuff L top
  [-0.56, 1.42, 0.15], // 95: Industrial Ear Cuff L bottom
  [0.56, 1.62, 0.15], // 96: Industrial Ear Cuff R top
  [0.56, 1.42, 0.15], // 97: Industrial Ear Cuff R bottom

  // =========================================================================
  // 4. TORSO, SNATCHED WAIST, ROUNDED KNEES & FLARED BOOTS (98-167)
  // =========================================================================
  [0.0, 0.05, 0.62], // 98: Bust center cleavage
  [0.0, 0.45, -0.35], // 99: Upper back center
  [-0.82, 0.52, 0.0], // 100: Shoulder joint L
  [0.82, 0.52, 0.0], // 101: Shoulder joint R

  // Cinched Hourglass Waist (102-106)
  [-0.28, -0.95, 0.32], // 102: Waist pinch front L
  [0.28, -0.95, 0.32], // 103: Waist pinch front R
  [-0.26, -0.95, -0.28], // 104: Waist pinch back L
  [0.26, -0.95, -0.28], // 105: Waist pinch back R
  [0.0, -1.55, 0.45], // 106: Low-rise V-hem point center

  // Flared Low-Rise Hips (107-112)
  [-0.84, -1.8, 0.52], // 107: Hip flare front L
  [0.84, -1.8, 0.52], // 108: Hip flare front R
  [-0.94, -1.72, 0.0], // 109: Hip flare side L
  [0.94, -1.72, 0.0], // 110: Hip flare side R
  [-0.84, -1.8, -0.46], // 111: Hip flare back L
  [0.84, -1.8, -0.46], // 112: Hip flare back R

  // 3D Diamond-Cross-Section Knees (113-120) - Tapered & separated!
  [-0.68, -4.1, 0.18], // 113: Knee L outer
  [-0.48, -4.1, 0.34], // 114: Knee L front-crest
  [-0.68, -4.1, -0.22], // 115: Knee L back
  [-0.32, -4.1, 0.0], // 116: Knee L inner
  [0.48, -4.1, 0.34], // 117: Knee R front-crest
  [0.68, -4.1, 0.18], // 118: Knee R outer
  [0.32, -4.1, 0.0], // 119: Knee R inner
  [0.68, -4.1, -0.22], // 120: Knee R back

  // Flared Boot Cuffs (121-128)
  [-0.95, -6.5, 0.32], // 121: Boot L outer
  [-0.62, -6.5, 0.52], // 122: Boot L front-crest
  [-0.95, -6.5, -0.35], // 123: Boot L back
  [-0.36, -6.5, 0.0], // 124: Boot L inner
  [0.62, -6.5, 0.52], // 125: Boot R front-crest
  [0.95, -6.5, 0.32], // 126: Boot R outer
  [0.36, -6.5, 0.0], // 127: Boot R inner
  [0.95, -6.5, -0.35], // 128: Boot R back

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

  // Sailor Collar & Tie (141-149)
  [0.0, 0.02, 0.68], // 141: Sailor tie knot
  [-0.24, 0.18, 0.66], // 142: Collar V-lapel L
  [0.24, 0.18, 0.66], // 143: Collar V-lapel R
  [-0.22, -0.55, 0.58], // 144: Tie tail L
  [0.22, -0.55, 0.58], // 145: Tie tail R
  [-0.92, 0.56, 0.28], // 146: Sailor collar shoulder L
  [0.92, 0.56, 0.28], // 147: Sailor collar shoulder R
  [-0.68, 0.05, -0.44], // 148: Sailor collar back flap L
  [0.68, 0.05, -0.44], // 149: Sailor collar back flap R

  // Platform Soles (150-157)
  [-1.02, -7.2, 0.42], // 150: Sole L outer
  [-0.64, -7.2, 0.68], // 151: Sole L front-toe
  [-1.02, -7.2, -0.42], // 152: Sole L back-heel
  [-0.36, -7.2, 0.0], // 153: Sole L inner
  [0.64, -7.2, 0.68], // 154: Sole R front-toe
  [1.02, -7.2, 0.42], // 155: Sole R outer
  [0.36, -7.2, 0.0], // 156: Sole R inner
  [1.02, -7.2, -0.42], // 157: Sole R back-heel

  // Prominent Silver Wrist Spikes (158-165)
  [-2.88, 0.12, 0.0], // 158: Spike L top
  [-2.52, -0.88, 0.0], // 159: Spike L bottom
  [-2.7, -0.38, 0.55], // 160: Spike L front
  [-2.7, -0.38, -0.55], // 161: Spike L back
  [2.88, 0.12, 0.0], // 162: Spike R top
  [2.52, -0.88, 0.0], // 163: Spike R bottom
  [2.7, -0.38, 0.55], // 164: Spike R front
  [2.7, -0.38, -0.55], // 165: Spike R back
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
