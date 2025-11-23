import { Type } from '@angular/core';

export interface Widget {
  id: number;
  label: string;
  content: Type<unknown>;
  rows?: number;
  columns?: number;
  backgroundColor?: {
    light: string;
    dark: string;
  };

  color?: {
    light: string;
    dark: string;
  };
}
