import { useFormField } from "@/hooks/useFormField";
import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
}

const Label = ({ children }: LabelProps) => {
  const { id } = useFormField();

  return <label htmlFor={id}>{children}</label>;
};

export default Label;
