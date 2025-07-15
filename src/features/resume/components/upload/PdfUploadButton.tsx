import { Plus } from "lucide-react";
import { ChangeEvent, useRef } from "react";

interface PdfUploadButtonProps {
  onAddPdf: (file) => void;
}

const PdfUploadButton = ({ onAddPdf }: PdfUploadButtonProps) => {
  const pdfRef = useRef<HTMLInputElement>(null);

  const handleChangePdf = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    onAddPdf(file);
  };

  const handleAddPdf = () => {
    pdfRef.current?.click();
  };

  return (
    <>
      <Plus onClick={handleAddPdf} />
      <input
        type="file"
        ref={pdfRef}
        onChange={handleChangePdf}
        style={{ display: "none" }}
      />
    </>
  );
};

export default PdfUploadButton;
