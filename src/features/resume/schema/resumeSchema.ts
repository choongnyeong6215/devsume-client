import { z } from "zod";

export const resumeSchema = z.object({
  // 필수
  profileImage: z.string().nonempty("프로필 사진은 필수입니다."),
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

  // 선택 사항
  techStack: z.array(z.string()).optional(),
  portfolio: z
    .object({
      urls: z.array(
        z.object({
          address: z.string().url("올바른 주소를 입력해주세요."),
        })
      ),
      pdfs: z.array(
        z.object({
          name: z.string(),
          uploadedAt: z.date(),
        })
      ),
    })
    .optional(),
  project: z.array(
    z.object({
      name: z.string(),
      organization: z.string(),
      duration: z.date(),
      detail: z.string(),
    })
  ),
});

export type ResumeFormFields = z.infer<typeof resumeSchema>;
