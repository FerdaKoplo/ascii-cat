export interface Option {
  id: "skater" | "sukeban" | "cat";
  label: string;
}

export const CHAR_OPTIONS: Option[] = [
  { id: "skater", label: "Skater Girl" },
  { id: "sukeban", label: "Sukeban Girl" },
  { id: "cat", label: "Blooby Cat" },
];
