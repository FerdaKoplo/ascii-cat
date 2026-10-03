// point for the 3d spaces

export type Vec3 = [number, number, number];

export const girlVertices: Vec3[] = [
  // --- FOREHEAD & BROW (0 to 4) ---
  [0.0, 1.1, 0.75], // 0: Mid Forehead
  [-0.75, 0.4, 0.9], // 1: Brow Left
  [0.75, 0.4, 0.9], // 2: Brow Right
  [-1.3, 0.3, 0.55], // 3: Temple Left
  [1.3, 0.3, 0.55], // 4: Temple Right

  // --- CHIBI JAW & CHIN (5 to 11) ---
  [-1.3, -0.25, 0.7], // 5: Cheek Left
  [1.3, -0.25, 0.7], // 6: Cheek Right
  [-0.95, -0.8, 0.75], // 7: Jaw Left
  [0.95, -0.8, 0.75], // 8: Jaw Right
  [-0.4, -1.25, 0.85], // 9: Chin Left Corner
  [0.4, -1.25, 0.85], // 10: Chin Right Corner
  [0.0, -1.35, 0.9], // 11: Chin Center Tip

  // --- NOSE (12) ---
  [0.0, -0.5, 1.15], // 12: Nose Tip

  // --- SLITTED COOL LEFT EYE (13 to 20) ---
  [-1.25, -0.05, 0.88], // 13: Left Outer (Raised sharply)
  [-0.35, -0.15, 1.0], // 14: Left Inner
  [-0.8, -0.05, 1.0], // 15: Left Top Lid
  [-0.8, -0.25, 0.95], // 16: Left Bottom Lid
  [-1.05, -0.1, 0.98], // 17: Left Iris Outer
  [-0.55, -0.1, 1.02], // 18: Left Iris Inner
  [-0.8, -0.1, 1.04], // 19: Left Pupil
  [-0.88, -0.05, 1.06], // 20: Left Glint

  // --- SLITTED COOL RIGHT EYE (21 to 28) ---
  [1.25, -0.05, 0.88], // 21: Right Outer (Raised sharply)
  [0.35, -0.15, 1.0], // 22: Right Inner
  [0.8, -0.05, 1.0], // 23: Right Top Lid
  [0.8, -0.25, 0.95], // 24: Right Bottom Lid
  [1.05, -0.1, 0.98], // 25: Right Iris Outer
  [0.55, -0.1, 1.02], // 26: Right Iris Inner
  [0.8, -0.1, 1.04], // 27: Right Pupil
  [0.88, -0.05, 1.06], // 28: Right Glint

  // --- LOWERED EYEBROWS (29 to 32) ---
  [-1.1, 0.12, 1.0], // 29: Left Brow Outer
  [-0.5, 0.18, 1.02], // 30: Left Brow Inner
  [0.5, 0.18, 1.02], // 31: Right Brow Inner
  [1.1, 0.12, 1.0], // 32: Right Brow Outer

  // --- SLIMMER MOUTH (33 to 40) ---
  [0.0, -0.76, 1.08], // 33: Center Dip
  [0.0, -0.82, 1.04], // 34: Center Bottom
  [-0.15, -0.74, 1.09], // 35: Left Lobe Top
  [-0.15, -0.84, 1.04], // 36: Left Lobe Bottom
  [-0.28, -0.78, 0.99], // 37: Left Corner
  [0.15, -0.74, 1.09], // 38: Right Lobe Top
  [0.15, -0.84, 1.04], // 39: Right Lobe Bottom
  [0.28, -0.78, 0.99], // 40: Right Corner

  // --- HAIR CROWN (41 to 48) ---
  [0.0, 2.1, 0.2], // 41: Crown Peak
  [-1.5, 1.7, 0.35], // 42: Top Left
  [1.5, 1.7, 0.35], // 43: Top Right
  [-0.75, 1.85, 0.35], // 44: Mid-Left Ridge
  [0.75, 1.85, 0.35], // 45: Mid-Right Ridge
  [-1.1, 1.15, 0.95], // 46: Root Left
  [0.0, 1.25, 1.0], // 47: Root Mid
  [1.1, 1.15, 0.95], // 48: Root Right

  // --- BANGS (49 to 53) ---
  [-0.95, 0.2, 1.2], // 49: Left Bang Tip
  [-0.45, 0.65, 1.15], // 50: Left Notch
  [0.0, 0.12, 1.25], // 51: Center Bang Tip
  [0.45, 0.65, 1.15], // 52: Right Notch
  [0.95, 0.2, 1.2], // 53: Right Bang Tip

  // --- 5-STAGE CURVED WOLFCUT LAYERS (54 to 71) ---
  // LEFT SIDE
  [-1.5, -0.1, 0.8], // 54: Cheek Outer (Flaring out)
  [-1.0, -0.1, 1.0], // 55: Cheek Inner
  [-1.4, -0.7, 0.4], // 56: Neck Outer (Tucked inward securely)
  [-0.9, -0.7, 0.6], // 57: Neck Inner
  [-1.6, -1.3, 0.3], // 58: Shoulder Outer (Sweeping over the collarbone)
  [-1.0, -1.3, 0.6], // 59: Shoulder Inner
  [-1.3, -1.9, 0.5], // 60: Chest Outer (Curving back towards the center)
  [-0.8, -1.9, 0.7], // 61: Chest Inner
  [-1.1, -2.4, 0.6], // 62: Tip (Resting softly)

  // RIGHT SIDE
  [1.5, -0.1, 0.8], // 63: Cheek Outer (Flaring out)
  [1.0, -0.1, 1.0], // 64: Cheek Inner
  [1.4, -0.7, 0.4], // 65: Neck Outer (Tucked inward securely)
  [0.9, -0.7, 0.6], // 66: Neck Inner
  [1.6, -1.3, 0.3], // 67: Shoulder Outer (Sweeping over the collarbone)
  [1.0, -1.3, 0.6], // 68: Shoulder Inner
  [1.3, -1.9, 0.5], // 69: Chest Outer (Curving back towards the center)
  [0.8, -1.9, 0.7], // 70: Chest Inner
  [1.1, -2.4, 0.6], // 71: Tip (Resting softly)

  // --- BACK OF SKULL (72 to 75) ---
  [0.0, 1.6, -1.4], // 72: Back Crown
  [-1.45, 0.2, -1.1], // 73: Back Left
  [1.45, 0.2, -1.1], // 74: Back Right
  [0.0, -1.1, -1.1], // 75: Nape of Neck

  // --- HIGH SHAGGY TWINTAILS (76 to 97) ---
  // Left Tail
  [-1.0, 2.0, -0.1], // 76: Tie Base
  [-1.8, 2.4, -0.3], // 77: Up Out
  [-1.4, 2.4, -0.7], // 78: Up Back
  [-1.1, 2.2, 0.1], // 79: Up Front
  [-2.4, 1.0, -0.5], // 80: Mid Flare Out
  [-1.6, 1.0, -0.9], // 81: Mid Flare Back
  [-1.3, 0.8, -0.1], // 82: Mid Flare Front
  [-2.0, -0.3, -0.7], // 83: Low Arc Out
  [-1.4, -0.3, -1.1], // 84: Low Arc Back
  [-1.1, -0.2, -0.3], // 85: Low Arc Front
  [-1.4, -1.6, -0.9], // 86: Tip

  // Right Tail
  [1.0, 2.0, -0.1], // 87: Tie Base
  [1.8, 2.4, -0.3], // 88: Up Out
  [1.4, 2.4, -0.7], // 89: Up Back
  [1.1, 2.2, 0.1], // 90: Up Front
  [2.4, 1.0, -0.5], // 91: Mid Flare Out
  [1.6, 1.0, -0.9], // 92: Mid Flare Back
  [1.3, 0.8, -0.1], // 93: Mid Flare Front
  [2.0, -0.3, -0.7], // 94: Low Arc Out
  [1.4, -0.3, -1.1], // 95: Low Arc Back
  [1.1, -0.2, -0.3], // 96: Low Arc Front
  [1.4, -1.6, -0.9], // 97: Tip

  // --- TORSO / DARK SHIRT (98 to 106) ---
  [0.0, -1.3, 0.5], // 98: Neck Front
  [0.0, -1.3, -0.5], // 99: Neck Back
  [-1.4, -1.6, 0.0], // 100: L Shoulder
  [1.4, -1.6, 0.0], // 101: R Shoulder
  [-0.65, -3.2, 0.6], // 102: Waist Front L (slightly cropped)
  [0.65, -3.2, 0.6], // 103: Waist Front R
  [-0.65, -3.2, -0.6], // 104: Waist Back L
  [0.65, -3.2, -0.6], // 105: Waist Back R
  [0.0, -3.4, 0.0], // 106: Crotch

  // --- ASYMMETRICAL PUNK SKIRT (107 to 112) ---
  [-1.1, -4.6, 1.0], // 107: Hem Front L (slanted, longer on left)
  [0.8, -3.9, 1.0], // 108: Hem Front R (shorter on right)
  [-1.4, -4.6, 0.0], // 109: Hem Outer L
  [1.2, -3.9, 0.0], // 110: Hem Outer R
  [-1.1, -4.6, -1.0], // 111: Hem Back L
  [0.8, -3.9, -1.0], // 112: Hem Back R

  // --- BARE LEGS (113 to 120) ---
  [-0.65, -6.0, 0.35], // 113: L Ankle F Out
  [-0.15, -6.0, 0.35], // 114: L Ankle F In
  [-0.65, -6.0, -0.35], // 115: L Ankle B Out
  [-0.15, -6.0, -0.35], // 116: L Ankle B In
  [0.15, -6.0, 0.35], // 117: R Ankle F In
  [0.65, -6.0, 0.35], // 118: R Ankle F Out
  [0.15, -6.0, -0.35], // 119: R Ankle B In
  [0.65, -6.0, -0.35], // 120: R Ankle B Out

  // --- BOOT UPPERS (121 to 128) ---
  [-0.85, -6.6, 1.2], // 121: L Shoe Top Toe Out (Higher up on the foot)
  [-0.1, -6.6, 1.2], // 122: L Shoe Top Toe In
  [-0.85, -6.6, -0.5], // 123: L Shoe Top Heel Out
  [-0.1, -6.6, -0.5], // 124: L Shoe Top Heel In
  [0.1, -6.6, 1.2], // 125: R Shoe Top Toe In
  [0.85, -6.6, 1.2], // 126: R Shoe Top Toe Out
  [0.1, -6.6, -0.5], // 127: R Shoe Top Heel In
  [0.85, -6.6, -0.5], // 128: R Shoe Top Heel Out

  // --- OVERSIZED SLOUCHY SLEEVES (129 to 136) ---
  [-2.5, -5.0, 0.2], // 129: L Cuff Out (Extends way past hands)
  [-1.3, -5.0, 0.2], // 130: L Cuff In
  [-1.9, -5.0, 0.8], // 131: L Cuff Front
  [-1.9, -5.0, -0.4], // 132: L Cuff Back
  [2.5, -5.0, 0.2], // 133: R Cuff Out
  [1.3, -5.0, 0.2], // 134: R Cuff In
  [1.9, -5.0, 0.8], // 135: R Cuff Front
  [1.9, -5.0, -0.4], // 136: R Cuff Back

  // --- HANDS (137 to 140) ---
  [-1.7, -4.5, 0.15], // 137: L Hand F (Hidden inside sleeves)
  [-1.5, -4.5, -0.15], // 138: L Hand B
  [1.5, -4.5, 0.15], // 139: R Hand F
  [1.7, -4.5, -0.15], // 140: R Hand B

  // --- OVERSIZED SHARP SAILOR COLLAR & LONG TIE (141 to 149) ---
  [0.0, -2.1, 0.85], // 141: Ribbon Knot (pushed out)
  [-0.5, -2.0, 0.9], // 142: Ribbon L Loop
  [0.5, -2.0, 0.9], // 143: Ribbon R Loop
  [-0.7, -3.8, 1.0], // 144: Ribbon L Tail (very long & jagged)
  [0.7, -3.4, 0.9], // 145: Ribbon R Tail
  [-1.5, -1.8, 0.2], // 146: Collar L (wider, sharper points)
  [1.5, -1.8, 0.2], // 147: Collar R
  [-1.0, -2.8, -0.85], // 148: Collar B Left
  [1.0, -2.8, -0.85], // 149: Collar B Right

  // --- MASSIVE PLATFORM SOLES (150 to 157) ---
  [-0.95, -7.6, 1.5], // 150: L Sole Toe Out
  [-0.05, -7.6, 1.5], // 151: L Sole Toe In
  [-0.95, -7.6, -0.7], // 152: L Sole Heel Out
  [-0.05, -7.6, -0.7], // 153: L Sole Heel In
  [0.05, -7.6, 1.5], // 154: R Sole Toe In
  [0.95, -7.6, 1.5], // 155: R Sole Toe Out
  [0.05, -7.6, -0.7], // 156: R Sole Heel In
  [0.95, -7.6, -0.7], // 157: R Sole Heel Out
];

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

export const girlFaces: Face[] = [
  // 1. CATCHLIGHTS (0 to 1)
  [15, 20, 19],
  [23, 28, 27],
  // 2. PUPILS (2 to 5)
  [16, 18, 19],
  [18, 15, 19],
  [24, 25, 27],
  [25, 23, 27],
  // 3. IRISES (6 to 11)
  [20, 17, 19],
  [17, 16, 19],
  [18, 16, 19],
  [28, 26, 27],
  [26, 24, 27],
  [23, 25, 27],
  // 4. SCLERA (12 to 19)
  [13, 15, 17],
  [13, 17, 16],
  [14, 18, 15],
  [14, 16, 18],
  [21, 25, 23],
  [21, 24, 25],
  [22, 23, 26],
  [22, 26, 24],
  // 5. BROWS (20 to 23)
  [1, 29, 30],
  [29, 15, 30],
  [2, 31, 32],
  [31, 23, 32],
  // 6. MOUTH (24 to 29)
  [33, 35, 34],
  [34, 35, 36],
  [35, 37, 36],
  [33, 34, 38],
  [34, 39, 38],
  [38, 39, 40],
  // 7. SKIN FACE (30 to 57)
  [0, 1, 30],
  [0, 30, 47],
  [0, 47, 31],
  [0, 31, 2],
  [1, 3, 13],
  [13, 3, 5],
  [13, 5, 16],
  [16, 5, 7],
  [2, 21, 4],
  [21, 6, 4],
  [21, 24, 6],
  [24, 8, 6],
  [12, 14, 16],
  [12, 24, 22],
  [12, 16, 37],
  [12, 37, 35],
  [12, 35, 33],
  [12, 33, 38],
  [12, 38, 40],
  [12, 40, 24],
  [34, 36, 9],
  [34, 9, 11],
  [34, 11, 10],
  [34, 10, 39],
  [36, 37, 7],
  [36, 7, 9],
  [39, 10, 8],
  [39, 8, 40],

  // 8. WOLFCUT BANGS & DRAPE LAYERS (58 to 87)
  [46, 50, 47],
  [47, 52, 48], // Notches
  [46, 49, 50],
  [42, 46, 49],
  [47, 50, 51],
  [47, 51, 52],
  [48, 52, 53],
  [43, 53, 48],
  [41, 44, 47],
  [41, 47, 45],
  [44, 42, 46],
  [45, 48, 43],
  // Left 5-Stage Curved Drape
  [42, 54, 3],
  [42, 55, 54],
  [54, 56, 55],
  [55, 56, 57],
  [56, 58, 57],
  [57, 58, 59],
  [58, 60, 59],
  [59, 60, 61],
  [60, 62, 61],
  // Right 5-Stage Curved Drape
  [43, 4, 63],
  [43, 63, 64],
  [63, 65, 64],
  [64, 65, 66],
  [65, 67, 66],
  [66, 67, 68],
  [67, 69, 68],
  [68, 69, 70],
  [69, 71, 70],

  // 9. HIGH SHAGGY TWINTAILS (88 to 123)
  [76, 77, 79],
  [76, 78, 77],
  [76, 79, 78],
  [77, 80, 79],
  [80, 82, 79],
  [77, 78, 80],
  [78, 81, 80],
  [78, 79, 81],
  [79, 82, 81],
  [80, 83, 82],
  [83, 85, 82],
  [80, 81, 83],
  [81, 84, 83],
  [81, 82, 84],
  [82, 85, 84],
  [83, 86, 85],
  [83, 84, 86],
  [84, 85, 86],
  [87, 88, 90],
  [87, 89, 88],
  [87, 90, 89],
  [88, 91, 90],
  [91, 93, 90],
  [88, 89, 91],
  [89, 92, 91],
  [89, 90, 92],
  [90, 93, 92],
  [91, 94, 93],
  [94, 96, 93],
  [91, 92, 94],
  [92, 95, 94],
  [92, 93, 95],
  [93, 96, 95],
  [94, 97, 96],
  [94, 95, 97],
  [95, 96, 97],

  // 10. HAIR CROWN & BACK (124 to 137)
  [41, 72, 42],
  [41, 43, 72],
  [42, 72, 73],
  [43, 74, 72],
  [72, 74, 75],
  [72, 75, 73],
  [73, 75, 7],
  [74, 8, 75],
  [3, 73, 7],
  [4, 8, 74],
  [9, 7, 75],
  [10, 75, 8],
  [11, 9, 75],
  [11, 75, 10],

  // 11. SHIRT (Torso & Sleeves) (138 to 153)
  [98, 100, 102],
  [98, 102, 103],
  [98, 103, 101],
  [99, 101, 105],
  [99, 105, 104],
  [99, 104, 100],
  [100, 102, 104],
  [101, 105, 103],
  [100, 131, 129],
  [100, 130, 131],
  [100, 129, 132],
  [100, 132, 130],
  [101, 133, 135],
  [101, 135, 134],
  [101, 136, 133],
  [101, 134, 136],

  // 12. MINISKIRT (154 to 163)
  [102, 107, 108],
  [102, 108, 103],
  [104, 112, 111],
  [104, 105, 112],
  [102, 109, 107],
  [102, 104, 109],
  [104, 111, 109],
  [103, 108, 110],
  [103, 110, 105],
  [105, 110, 112],

  // 13. SKIN (Legs & Hands) (164 to 189)
  [102, 113, 114],
  [102, 114, 106],
  [104, 116, 115],
  [104, 106, 116],
  [102, 115, 113],
  [102, 104, 115],
  [106, 116, 114],
  [103, 117, 118],
  [103, 106, 117],
  [105, 120, 119],
  [105, 119, 106],
  [103, 118, 120],
  [103, 120, 105],
  [106, 117, 119],
  [129, 137, 131],
  [131, 137, 130],
  [132, 130, 138],
  [129, 132, 138],
  [130, 137, 138],
  [129, 138, 137],
  [133, 135, 139],
  [135, 134, 139],
  [136, 140, 134],
  [133, 140, 136],
  [134, 140, 139],
  [133, 139, 140],

  // 14. SHOES (190 to 209)
  [113, 121, 122],
  [113, 122, 114],
  [115, 124, 123],
  [115, 116, 124],
  [113, 123, 121],
  [113, 115, 123],
  [114, 122, 124],
  [114, 124, 116],
  [121, 123, 124],
  [121, 124, 122],
  [118, 126, 125],
  [118, 125, 117],
  [120, 128, 127],
  [120, 127, 119],
  [118, 120, 128],
  [118, 128, 126],
  [117, 125, 127],
  [117, 127, 119],
  [126, 128, 127],
  [126, 127, 125],

  // 15. PLATFORM BOOT SOLES (210 to 229)
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

  // 16. SAILOR COLLAR (230 to 234)
  [99, 148, 146],
  [99, 149, 148],
  [99, 147, 149],
  [98, 146, 141],
  [98, 141, 147],

  // 17. RIBBON (235 to 238)
  [98, 141, 142],
  [98, 143, 141],
  [141, 144, 142],
  [141, 143, 145],
];

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
