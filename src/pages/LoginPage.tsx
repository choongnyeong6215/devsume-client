import LoginForm from "@/features/auth/components/LoginForm";
import { AuthFormFields, authSchema } from "@/features/auth/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

const LoginPage = () => {
  const methods = useForm<AuthFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(authSchema),
  });

  return (
    <FormProvider {...methods}>
      <LoginForm />
    </FormProvider>
  );
};

export default LoginPage;
