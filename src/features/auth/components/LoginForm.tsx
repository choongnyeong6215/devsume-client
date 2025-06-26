import Button from "@/components/Button";
import { FormField } from "@/features/resume/components/formField";
import styled from "@emotion/styled";
import { Link } from "react-router";
import { useLogin } from "@/features/auth/hooks/useLogin";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthFormFields, authSchema } from "@/features/auth/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

const LoginForm = () => {
  const { mutateAsync } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<AuthFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<AuthFormFields> = async (data) => {
    try {
      await mutateAsync(data);

      reset();
    } catch (err) {
      if (err instanceof AxiosError) {
        setError("root", {
          message: err.response?.data?.message,
        });
      }
    }
  };

  return (
    <LoginFormController>
      <h1>Devsume</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          id="email"
          errorMessage={errors.email && errors.email.message}
        >
          <FormField.Label>이메일</FormField.Label>
          <FormField.Input {...register("email")} />
          <FormField.ErrorMessage />
        </FormField>
        <FormField
          id="password"
          errorMessage={errors.password && errors.password.message}
        >
          <FormField.Label>비밀번호</FormField.Label>
          <FormField.Input {...register("password")} />
          <FormField.ErrorMessage />
          <div className="border-line" />
        </FormField>
        {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}
        <Button schema="filled" radiusSize="medium" disabled={isSubmitting}>
          로그인
        </Button>
        <div className="join">
          <Link to="/join">회원가입</Link>
        </div>
      </form>
    </LoginFormController>
  );
};

const LoginFormController = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 480px;

    .join {
      display: flex;
      justify-content: flex-end;
      margin-top: 0.75rem;

      a {
        color: ${({ theme }) => theme.color.border};
      }
    }
  }

  svg {
    width: 5rem;
    height: 5rem;
  }

  .border-line {
    background-color: #f1f4f6;
    width: 100%;
    height: 2px;
    margin: 1rem 0;
  }
`;

export default LoginForm;
