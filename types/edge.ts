export type Edge = {
  id: string;
  source: string;
  target: string;
  position: {
    x0: number; // Starting x coordinate
    y0: number; // Starting y coordinate
    x1: number; // Ending x coordinate
    y1: number; // Ending y coordinate
  };
};
