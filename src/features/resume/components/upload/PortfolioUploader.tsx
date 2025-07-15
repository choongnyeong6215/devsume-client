import styled from "@emotion/styled";
import { Plus, Trash2 } from "lucide-react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import PdfUploadButton from "./PdfUploadButton";

const PortfolioUploader = () => {
  const { control } = useFormContext();

  const {
    fields: urlFields,
    append: appendUrl,
    remove: removeUrl,
  } = useFieldArray({
    control,
    name: "urls",
  });

  const {
    fields: pdfFields,
    append: appendPdf,
    remove: removePdf,
  } = useFieldArray({
    control,
    name: "pdfs",
  });

  // url 입력 섹션 추가
  const handleAddUrl = () => {
    appendUrl({ name: "", address: "" });
  };

  const handleAddPdf = (file) => {
    appendPdf({
      name: file.name,
      uploadedAt: file.lastModifiedDate,
    });
  };

  return (
    <PortfolioUploaderContainer>
      <TypeHeader>
        <h3>URL</h3>
        <Plus onClick={handleAddUrl} />
      </TypeHeader>

      {/* Url List */}
      {urlFields.map((field, idx) => (
        <StyledPortfolioUploader key={field.id}>
          <Controller
            name={`urls.${idx}.link`}
            control={control}
            render={({ field }) => (
              <div className="url-section">
                <label style={{ width: "2rem" }} htmlFor={`${idx}Address`}>
                  주소
                </label>
                <InputField
                  {...field}
                  id={`${idx}Address`}
                  placeholder="https://"
                />
              </div>
            )}
          />
          <Trash2 onClick={() => removeUrl(idx)} />
        </StyledPortfolioUploader>
      ))}

      <div className="border-line" />

      <TypeHeader>
        <h3>PDF</h3>
        <PdfUploadButton onAddPdf={handleAddPdf} />
      </TypeHeader>

      {/* Pdf List */}
      {pdfFields.map((field, index) => (
        <StyledPortfolioUploader key={field.id}>
          <div className="pdf-section">
            <div>
              <label>파일명</label>
              <p>{field.name}</p>
            </div>
            <div>
              <label>등록일</label>
              <p>{new Date(field.uploadedAt).toLocaleString()}</p>
            </div>
          </div>
          <Trash2 onClick={() => removePdf(index)} />
        </StyledPortfolioUploader>
      ))}
    </PortfolioUploaderContainer>
  );
};

const PortfolioUploaderContainer = styled.div`
  .border-line {
    background-color: #f1f4f6;
    width: 100%;
    height: 5px;
  }
`;

const StyledPortfolioUploader = styled.div`
  ${({ theme }) => ({
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 1.5rem",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    marginBottom: "1rem",
  })}

  .url-section {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    flex: 1;
  }

  .pdf-section {
    display: flex;
    flex: 1;
    gap: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      label {
        font-size: 0.9rem;
        font-weight: 500;
      }

      p {
        color: ${({ theme }) => theme.color.border};
        font-weight: 600;
      }
    }
  }
`;

const InputField = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.25rem;
  font-size: inherit;
  width: 60%;

  &::placeholder {
    color: ${({ theme }) => theme.color.border};
  }
`;

const TypeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;

  svg {
    cursor: pointer;
  }
`;

export default PortfolioUploader;
