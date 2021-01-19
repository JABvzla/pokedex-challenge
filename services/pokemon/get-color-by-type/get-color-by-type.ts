import { COLOR_BY_TYPE } from "../../../contants/color-by-type";

export const getColorByType = (type: string): string =>
  COLOR_BY_TYPE[type] || "#aac";
