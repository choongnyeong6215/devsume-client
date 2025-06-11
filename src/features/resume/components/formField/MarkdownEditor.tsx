import MDEditor from "@uiw/react-md-editor";

interface MarkdownEditorProps {
  description: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = ({ description, onChange }: MarkdownEditorProps) => {
  return (
    <MDEditor
      height={250}
      value={description}
      onChange={(v) => onChange(v || "")}
    />
  );
};

export default MarkdownEditor;
