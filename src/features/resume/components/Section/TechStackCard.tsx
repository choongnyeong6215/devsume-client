import { Card } from "@/features/resume/components/Card/";
import { FormField } from "@/features/resume/components/formField";

const TechStack = () => {
  return (
    <Card title="기술 스택" isEssential={false} isMultiple={false}>
      <Card.Header />
      <FormField
        id="techStack"
        description="업무에 사용할 수 있는 기술을 검색해보세요."
      >
        <FormField.Label>나의 기술</FormField.Label>
        <FormField.Description />
        <FormField.SearchInput />
        <FormField.ErrorMessage />
      </FormField>
    </Card>
  );
};

export default TechStack;
