import { Card } from "@/features/resume/components/Card/";
import { FormField } from "@/features/resume/components/formField";
import FormFlexProvider from "@/features/resume/components/formField/FormFlexProvider";

const EssentialSection = () => {
  return (
    <Card title="기본 정보" isEssential isMultiple={false}>
      <Card.Header />
      <FormField id="profileImage">
        <FormField.ProfileUplodaer />
        <FormField.ErrorMessage />
      </FormField>
      <div style={{ display: "flex", gap: "1rem" }}>
        <FormFlexProvider>
          <FormField id="name">
            <FormField.Label>이름</FormField.Label>
            <FormField.Input />
            <FormField.ErrorMessage />
          </FormField>
        </FormFlexProvider>
        <FormFlexProvider>
          <FormField id="position">
            <FormField.Label>직군</FormField.Label>
            <FormField.Input />
            <FormField.ErrorMessage />
          </FormField>
        </FormFlexProvider>
      </div>
      <FormField id="email">
        <FormField.Label>이메일</FormField.Label>
        <FormField.Input />
        <FormField.ErrorMessage />
      </FormField>
      <FormField
        id="introduction"
        description="작성자님을 어필할 수 있는 소개글을 작성해보세요. (최대 300자 지원)"
      >
        <FormField.Label>한줄 소개</FormField.Label>
        <FormField.Description />
        <FormField.TextArea />
        <FormField.ErrorMessage />
      </FormField>
    </Card>
  );
};

export default EssentialSection;
