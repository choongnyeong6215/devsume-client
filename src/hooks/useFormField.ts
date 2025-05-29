import { FormFieldContext } from "@/context/formFieldContext";
import { useContext } from "react";

export const useFormField = () => {
  const formFieldContext = useContext(FormFieldContext);

  if (!formFieldContext) {
    throw new Error(
      "FormField의 하위 컴포넌트는 FormField가 포함되어야 합니다."
    );
  }

  return formFieldContext;
};
