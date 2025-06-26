import { z } from "zod";

export const authSchema = z.object({
  email: z
    .string()
    .nonempty("이메일은 필수입니다.")
    .email("올바른 이메일 형식을 입력해주세요."),
  password: z
    .string()
    .nonempty("비밀번호는 필수입니다.")
    .min(6, "비밀번호는 최소 6자리 입니다."),
});

export type AuthFormFields = z.infer<typeof authSchema>;
