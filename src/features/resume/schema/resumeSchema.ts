import { z } from "zod";

export const resumeSchema = z.object({
  // 필수
  profileImage: z.instanceof(File, { message: "프로필 사진은 필수입니다." }),
  name: z.string().nonempty("이름은 필수입니다."),
  position: z.string().nonempty("직군은 필수입니다."),
  email: z
    .string()
    .nonempty("이메일은 필수입니다.")
    .email("올바른 이메일 형식을 입력해주세요."),
  introduction: z
    .string()
    .nonempty("한줄 소개는 필수입니다.")
    .max(300, "한줄 소개는 최대 300자 까지 지원합니다."),
});

export type ResumeFormFields = z.infer<typeof resumeSchema>;
