export type SelectedElementType = ElementType & {
  xOffsets?: number[];
  yOffsets?: number[];
  offsetX?: number;
  offsetY?: number;
};

export interface ExtendedElementType extends ElementType {
  xOffsets?: number[];
  yOffsets?: number[];
}

export type ElementType = {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: ToolValue;
  // TODO: add type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roughElement?: any;
  offsetX?: number;
  offsetY?: number;
  position?: string | null;
  points?: { x: number; y: number }[];
  text?: string;
};

export type ActionsType =
  | "writing"
  | "drawing"
  | "moving"
  | "panning"
  | "resizing"
  | "none";

  export const Tools = {
    navigate: {
      value: "navigate",
      key: "N"
    },
    selection: {
      value: "selection",
      key: "S"
    },
    rectangle: {
      value: "rectangle",
      key: "R"
    },
    ellipse: {
      value: "ellipse",
      key: "O"
    },
    diamond: {
      value: "diamond",
      key: "D"
    },
    line: {
      value: "line",
      key: "L"
    },
    arrow: {
      value: "arrow",
      key: "A"
    },
    cylinder: {
      value: "cylinder",
      key: "C"
    },
    freehand: {
      value: "freehand",
      key: "F"
    },
    text: {
      value: "text",
      key: "T"
    },
    eraser: {
      value: "eraser",
      key: "E"
    },
    laserPointer: {
      value: "laser_pointer",
      key: "H"
    },
    insertImage: {
      value: "insert_image",
      key: "I"
    }
  }

export type ToolValue = typeof Tools[keyof typeof Tools]['value'];
export type ToolType = typeof Tools[keyof typeof Tools];
export type ToolKey = typeof Tools[keyof typeof Tools]['key'];

export type PointType = { x: number; y: number };