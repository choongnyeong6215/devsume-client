import styled from "@emotion/styled";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { AuthFormFields } from "@/features/auth/schema/authSchema";
import { FormField } from "@/features/resume/components/formField";
import Button from "@/components/Button";
import { useJoin } from "@/features/auth/hooks/useJoin";
import { AxiosError } from "axios";

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useFormContext();
  const { mutateAsync } = useJoin();

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
    <JoinFormController>
      <h1>Devsume</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField id="email">
          <FormField.Label>이메일</FormField.Label>
          <FormField.Input {...register("email")} />
          <FormField.ErrorMessage />
        </FormField>
        <FormField id="password">
          <FormField.Label>비밀번호</FormField.Label>
          <FormField.Input {...register("password")} />
          <FormField.ErrorMessage />
          <div className="border-line" />
        </FormField>
        {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}
        <Button schema="filled" radiusSize="medium">
          회원가입
        </Button>
        {/* 카카오 로그인 */}
      </form>
    </JoinFormController>
  );
};

const JoinFormController = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 480px;
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

export default JoinForm;
