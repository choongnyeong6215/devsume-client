import styled from "@emotion/styled";
import { ReactNode } from "react";

const FormFlexProvider = ({ children }: { children: ReactNode }) => {
  return <FormProvider>{children}</FormProvider>;
};

const FormProvider = styled.div`
  flex: 1;
`;

export default FormFlexProvider;
