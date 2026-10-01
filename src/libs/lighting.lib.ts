export const getShadeChar = (brightness: number): string => {
  if (brightness > 0.8) return "@";
  if (brightness > 0.4) return "+";
  if (brightness > 0.1) return ".";
  return " ";
};
