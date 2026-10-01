export const getShadeChar = (brightness: number): string => {
  // const clampedBrightness = Math.max(0, Math.min(1, brightness));
  //
  // const maxIndex = SHADE_PALETTE.length - 1;
  // const index = Math.round(clampedBrightness * maxIndex);
  // ''
  //
  // return SHADE_PALETTE[index];
  if (brightness > 0.8) return "@";
  if (brightness > 0.4) return "+";
  if (brightness > 0.1) return ".";
  return " ";
};
