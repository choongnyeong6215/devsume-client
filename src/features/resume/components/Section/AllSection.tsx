import Button from "@/components/Button";
import EssentialSection from "@/features/resume/components/Section/EssentialSection";
import OptionalSection from "@/features/resume/components/Section/OptionalSection";
import {
  FieldErrors,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ResumeFormFields, resumeSchema } from "../../schema/resumeSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const AllSection = () => {
  const methods = useForm<ResumeFormFields>({
    defaultValues: {
      profileImage: "",
      name: "",
      position: "",
      email: "",
      introduction: "",
      techStack: [],
      portfolio: {
        urls: [],
        pdfs: [],
      },
      project: [],
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(resumeSchema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<ResumeFormFields> = (data) => {
    console.log(data);

    reset();
  };

  const onError = (errors: FieldErrors<ResumeFormFields>) => {
    console.log(errors);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <EssentialSection />
        <OptionalSection />
        <Button schema="filled" radiusSize="medium">
          저장
        </Button>
      </form>
    </FormProvider>
  );
};

export default AllSection;
