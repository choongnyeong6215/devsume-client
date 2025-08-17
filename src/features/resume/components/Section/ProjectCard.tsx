import { Card } from "@/features/resume/components/Card/";
import { FormField } from "@/features/resume/components/formField";
import FormFlexProvider from "@/features/resume/components/formField/FormFlexProvider";

const ProjectCard = () => {
  return (
    <Card title="프로젝트" isEssential={false} isMultiple>
      <Card.Header />

      {/* 프로젝트명 */}
      <FormField id="projectName">
        <FormField.Label>프로젝트명</FormField.Label>
        <FormField.Description />
        <FormField.Input placeholder="프로젝트 이름" />
      </FormField>

      <div style={{ display: "flex", gap: "1rem" }}>
        <FormFlexProvider>
          {/* 소속 / 기관 */}
          <FormField id="organization">
            <FormField.Label>소속 / 기관</FormField.Label>
            <FormField.Description />
            <FormField.Input placeholder="소속 / 기관" />
          </FormField>
        </FormFlexProvider>

        <FormFlexProvider>
          {/* 기간 */}
          <FormField id="projectDuration">
            <FormField.Label>기간</FormField.Label>
            <FormField.MonthRangePicker />
          </FormField>
        </FormFlexProvider>
      </div>

      {/* 개요 */}
      <FormField
        id="projectDescription"
        description="프로젝트 내용, 본인의 역할에 대해 작성해보세요."
      >
        <FormField.Label>개요</FormField.Label>
        <FormField.Description />
        <FormField.MarkDownEditor />
        <FormField.ErrorMessage />
      </FormField>
    </Card>
  );
};

export default ProjectCard;
