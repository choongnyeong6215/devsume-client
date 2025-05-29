import { createContext } from "react";

export interface FormFieldContextValue {
  id: string;
  description?: string;
  errorMessage?: string;
}

export const FormFieldContext = createContext<FormFieldContextValue | null>(
  null
);

export const FormFieldContextProvider = FormFieldContext.Provider;
