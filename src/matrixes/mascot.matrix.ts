import type { Vec3 } from "../libs/skeleton.lib";

export const mascotFaceVertices: Vec3[] = [
  [0.0, -1.12, 0.88], // 0: Chiseled Chin Tip (Mental Protuberance)
  [-0.38, -0.96, 0.76], // 1: Anterior Jaw L
  [0.38, -0.96, 0.76], // 2: Anterior Jaw R
  [0.0, -0.82, 1.04], // 3: Lower Lip Vermilion Border
  [0.0, -0.7, 0.98], // 4: Mouth Stomion (Part Line)
  [0.0, -0.58, 1.08], // 5: Cupid's Bow Center
  [-0.28, -0.72, 0.92], // 6: Mouth Corner (Oral Commissure) L
  [0.28, -0.72, 0.92], // 7: Mouth Corner (Oral Commissure) R
  [-0.78, -0.22, 0.88], // 8: Malar Cheekbone Prominence L
  [0.78, -0.22, 0.88], // 9: Malar Cheekbone Prominence R
  [0.0, -0.08, 1.34], // 10: Classical Nose Tip (Pronasale)
  [0.0, 0.36, 1.2], // 11: Straight Greek Nasal Bridge (Nasion)
  [0.0, 0.92, 1.08], // 12: Frontal Eminence (Forehead Center)
  [-0.28, 0.28, 1.04], // 13: L Eye Medial Canthus (Tear Duct)
  [-0.78, 0.34, 0.86], // 14: L Eye Lateral Canthus
  [-0.52, 0.32, 1.08], // 15: L Carved Marble eyeball Apex
  [-0.52, 0.46, 1.04], // 16: L Upper Eyelid Crease
  [-0.52, 0.2, 1.02], // 17: L Lower Eyelid Rim
  [0.28, 0.28, 1.04], // 18: R Eye Medial Canthus (Tear Duct)
  [0.78, 0.34, 0.86], // 19: R Eye Lateral Canthus
  [0.52, 0.32, 1.08], // 20: R Carved Marble Eyeball Apex
  [0.52, 0.46, 1.04], // 21: R Upper Eyelid Crease
  [0.52, 0.2, 1.02], // 22: R Lower Eyelid Rim
  [-0.26, 0.58, 1.16], // 23: L Supraorbital Brow Ridge Inner
  [-0.86, 0.56, 0.9], // 24: L Supraorbital Brow Ridge Outer
  [0.26, 0.58, 1.16], // 25: R Supraorbital Brow Ridge Inner
  [0.86, 0.56, 0.9], // 26: R Supraorbital Brow Ridge Outer
  [-0.92, 0.82, 0.54], // 27: Temporal Crest L
  [0.92, 0.82, 0.54], // 28: Temporal Crest R
  [-1.04, 0.08, 0.14], // 29: Pre-Auricular Ear Root L
  [1.04, 0.08, 0.14], // 30: Pre-Auricular Ear Root R

  // --- UPPER & MID NECK CYLINDER (31-35) ---
  [0.0, -1.46, 0.44], // 31: Laryngeal Prominence (Throat Center)
  [-0.46, -1.42, 0.28], // 32: Mid-Neck Lateral L
  [0.46, -1.42, 0.28], // 33: Mid-Neck Lateral R
  [-0.86, -2.05, 0.6], // 34: Medial Clavicle Head L
  [0.86, -2.05, 0.6], // 35: Medial Clavicle Head R

  // --- FACIAL PIERCINGS (36-40) ---
  [0.0, -0.26, 1.36], // 36: Septum Ring
  [-0.72, 0.66, 1.04], // 37: L Eyebrow Ring
  [0.16, -0.86, 1.08], // 38: R Spider Bite 1
  [0.32, -0.82, 1.02], // 39: R Spider Bite 2
  [0.0, 0.38, 1.26], // 40: Nasal Bridge Barbell

  // =========================================================================
  // 2. EXTENDED NECK, SCM MUSCLES, CLAVICLES & MARBLE BUST PEDESTAL (41-68)
  // =========================================================================
  [-0.52, -1.02, -0.16], // 41: Mastoid Process L (Behind Ear)
  [0.52, -1.02, -0.16], // 42: Mastoid Process R (Behind Ear)
  [0.0, -1.12, -0.48], // 43: Suboccipital Nape Center
  [-0.46, -1.55, -0.22], // 44: Mid-Neck Posterior L
  [0.46, -1.55, -0.22], // 45: Mid-Neck Posterior R
  [0.0, -1.6, -0.5], // 46: Mid Nape Spine
  [0.0, -2.14, 0.58], // 47: Suprasternal Notch (Deep Pit of Neck)
  [-0.54, -1.92, 0.42], // 48: Sternocleidomastoid (SCM) Cord L
  [0.54, -1.92, 0.42], // 49: Sternocleidomastoid (SCM) Cord R
  [-1.24, -1.85, 0.06], // 50: Trapezius Ridge L
  [1.24, -1.85, 0.06], // 51: Trapezius Ridge R
  [0.0, -2.05, -0.6], // 52: C7 Vertebra Prominens
  [-1.12, -2.05, -0.48], // 53: Posterior Trapezius L
  [1.12, -2.05, -0.48], // 54: Posterior Trapezius R
  [-1.66, -2.12, 0.5], // 55: Lateral Clavicle Shaft L
  [1.66, -2.12, 0.5], // 56: Lateral Clavicle Shaft R
  [-2.2, -2.28, 0.2], // 57: Acromion / Deltoid Cap L Front
  [2.2, -2.28, 0.2], // 58: Acromion / Deltoid Cap R Front
  [-2.16, -2.32, -0.36], // 59: Deltoid Cap L Back
  [2.16, -2.32, -0.36], // 60: Deltoid Cap R Back
  [0.0, -2.82, 0.76], // 61: Classical Bust Sternum Center
  [-0.98, -2.8, 0.7], // 62: Pectoral Shelf L
  [0.98, -2.8, 0.7], // 63: Pectoral Shelf R
  [-1.88, -2.88, 0.46], // 64: Lower Deltoid Bust Cut L
  [1.88, -2.88, 0.46], // 65: Lower Deltoid Bust Cut R
  [0.0, -2.85, -0.68], // 66: Upper Back Bust Cut Center
  [-1.76, -2.88, -0.56], // 67: Scapula Bust Cut L
  [1.76, -2.88, -0.56], // 68: Scapula Bust Cut R

  // =========================================================================
  // 3. CLASSICAL GREEK SCULPTURE FACIAL PLANES (69-86)
  // =========================================================================
  [-0.2, -0.18, 1.16], // 69: Nasal Alar Wing (Nostril Flare) L
  [0.2, -0.18, 1.16], // 70: Nasal Alar Wing (Nostril Flare) R
  [0.0, -0.24, 1.14], // 71: Subnasale (Base of Nose Septum)
  [-0.98, -0.05, 0.52], // 72: Zygomatic Arch (Outer Cheekbone) L
  [0.98, -0.05, 0.52], // 73: Zygomatic Arch (Outer Cheekbone) R
  [-0.64, -0.58, 0.66], // 74: Buccal Cheek Hollow L (Sculpted Shadow Plane)
  [0.64, -0.58, 0.66], // 75: Buccal Cheek Hollow R (Sculpted Shadow Plane)
  [-0.82, -0.74, 0.28], // 76: Gonial Jaw Angle (Mandible Corner) L
  [0.82, -0.74, 0.28], // 77: Gonial Jaw Angle (Mandible Corner) R
  [-0.55, 0.52, 0.94], // 78: Deep Orbit / Brow Undercut L
  [0.55, 0.52, 0.94], // 79: Deep Orbit / Brow Undercut R
  [-0.1, -0.44, 1.12], // 80: Philtrum Ridge L
  [0.1, -0.44, 1.12], // 81: Philtrum Ridge R
  [0.0, -0.94, 0.94], // 82: Labiomental Groove (Indent Above Chin)
  [-0.18, -1.08, 0.86], // 83: Chin Tubercle L
  [0.18, -1.08, 0.86], // 84: Chin Tubercle R
  [0.0, 0.62, 1.16], // 85: Glabella Keystone (Between Brows)
  [0.0, -3.25, 0.35], // 86: Classical Bust Pedestal Plinth Front

  // =========================================================================
  // 4. ANATOMICAL 3D SCULPTED EARS & EAR CUFFS (87-106)
  // =========================================================================
  // Left 3D Ear (87-96)
  [-1.12, 0.42, 0.05], // 87: L Ear Helix Top Arch
  [-1.28, 0.24, -0.14], // 88: L Ear Helix Upper-Outer Rim
  [-1.26, -0.06, -0.16], // 89: L Ear Helix Mid-Outer Rim
  [-1.12, -0.34, 0.02], // 90: L Earlobe Bottom Tip
  [-1.02, -0.22, 0.16], // 91: L Earlobe Anterior Attachment
  [-1.05, 0.06, 0.2], // 92: L Ear Tragus (Front Cartilage Tab)
  [-1.16, 0.14, -0.02], // 93: L Antihelix Inner Curve
  [-1.08, 0.02, -0.04], // 94: L Concha Bowl (Deep Inner Ear Hollow)
  [-1.34, 0.32, -0.16], // 95: L Upper Helix Silver Cuff Piercing 1
  [-1.32, 0.14, -0.18], // 96: L Mid Helix Silver Cuff Piercing 2

  // Right 3D Ear (97-106)
  [1.12, 0.42, 0.05], // 97: R Ear Helix Top Arch
  [1.28, 0.24, -0.14], // 98: R Ear Helix Upper-Outer Rim
  [1.26, -0.06, -0.16], // 99: R Ear Helix Mid-Outer Rim
  [1.12, -0.34, 0.02], // 100: R Earlobe Bottom Tip
  [1.02, -0.22, 0.16], // 101: R Earlobe Anterior Attachment
  [1.05, 0.06, 0.2], // 102: R Ear Tragus (Front Cartilage Tab)
  [1.16, 0.14, -0.02], // 103: R Antihelix Inner Curve
  [1.08, 0.02, -0.04], // 104: R Concha Bowl (Deep Inner Ear Hollow)
  [1.34, 0.32, -0.16], // 105: R Upper Helix Silver Cuff Piercing 1
  [1.32, 0.14, -0.18], // 106: R Mid Helix Silver Cuff Piercing 2
];
