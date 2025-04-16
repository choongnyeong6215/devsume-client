import "@emotion/react";
import {
  ButtonSchema,
  ColorSchema,
  FontSize,
  Radius,
  ThemeName,
  TooltipSchmea,
} from "@/types/theme";

declare module "@emotion/react" {
  export interface Theme {
    name: ThemeName;
    color: Record<ColorSchema, string>;
    button: {
      [key in ButtonSchema]: {
        color: string;
        background: string;
        border?: string;
        padding: string;
      };
    };
    tooltip: {
      [key in TooltipSchmea]: {
        color: string;
        background: string;
        padding: string;
      };
    };
    fontSize: Record<FontSize, string>;
    radius: Record<Radius, string>;
  }
}
