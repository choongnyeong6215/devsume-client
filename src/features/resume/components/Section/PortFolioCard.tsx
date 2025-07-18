import { Card } from "@/features/resume/components/Card/";
import { FormField } from "@/features/resume/components/formField";

const PortFolio = () => {
  return (
    <Card title="포트폴리오" isEssential={false} isMultiple={false}>
      <Card.Header />
      <FormField
        id="Portfolio"
        description="현재 PDF 확장자만 업로드 가능해요."
      >
        <FormField.PortfolioUploader />
      </FormField>
    </Card>
  );
};

export default PortFolio;
