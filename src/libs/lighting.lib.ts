export const getShadeChar = (brightness: number): string => {
  if (brightness > 0.85) return "@";
  if (brightness > 0.7) return "%";
  if (brightness > 0.5) return "#";
  if (brightness > 0.3) return "*";
  if (brightness > 0.15) return "+";
  if (brightness > 0.05) return ".";
  return " ";
};
