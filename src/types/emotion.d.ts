import "@emotion/react";
import { ColorKey } from "@types/theme";

declare module "@emotion/react" {
  export interface Theme {
    color: Record<ColorKey, string>;
    backgroundColor: string;
    borderRadius: {
      default: string;
    };
  }
}
