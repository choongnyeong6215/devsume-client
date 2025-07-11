import JoinForm from "@/features/auth/components/JoinForm";
import { AuthFormFields, authSchema } from "@/features/auth/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

const JoinPage = () => {
  const methods = useForm<AuthFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(authSchema),
  });

  return (
    <FormProvider {...methods}>
      <JoinForm />
    </FormProvider>
  );
};

export default JoinPage;
