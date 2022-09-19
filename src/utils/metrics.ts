import { BASE_PIXEL_VALUE } from './constants';

export const remify = (pixels: number) =>
  pixels > 0 ? `${pixels / BASE_PIXEL_VALUE}rem` : pixels;
