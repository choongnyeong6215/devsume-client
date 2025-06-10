import { createContext } from "react";

export interface CardContextValue {
  title: string;
  isEssential: boolean;
  isMultiple: boolean;
  helperMessage?: string;
}

export const CardContext = createContext<CardContextValue | null>(null);

export const CardContextProvider = CardContext.Provider;
