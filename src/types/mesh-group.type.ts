import type { Face } from "../libs/skeleton.lib";

export type MeshGroup = {
  name: string;
  color: string;
  char?: string;
  faces: Face[];
};
