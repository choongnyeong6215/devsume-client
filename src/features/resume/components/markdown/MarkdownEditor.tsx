import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo } from "react";
import styled from "@emotion/styled";
import CodeBlock from "@tiptap/extension-code-block";
import { darken } from "polished";

const MarkDownEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "code-block",
        },
      }),
    ],
    content: "",
  });

  const providerValue = useMemo(() => ({ editor }), [editor]);

  return (
    <EditorContext.Provider value={providerValue}>
      <EditorContainer>
        <EditorContent editor={editor} />
      </EditorContainer>
    </EditorContext.Provider>
  );
};

const EditorContainer = styled.div`
  ${({ theme }) => ({
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    minHeight: "250px",

    ".ProseMirror": {
      outline: "none",
      padding: "1rem",
      minHeight: "200px",
      cursor: "text",
      fontSize: "16px",
      lineHeight: "1.5",

      pre: {
        backgroundColor: darken(0.2, theme.color.background),
        border: "1px solid #e1e4e8",
        borderRadius: "6px",
        padding: "16px",
        margin: "16px 0",
        overflow: "auto",
        fontSize: "14px",
        lineHeight: "1.45",
        fontFamily: "'SFMono-Regular', 'Monaco', monospace",
        color: "#24292e",

        code: {
          backgroundColor: "transparent",
          border: "none",
          padding: "0",
          fontSize: "inherit",
          color: "inherit",
        },
      },

      // 노션 스타일 헤딩
      h1: {
        fontSize: "30px",
        fontWeight: "700",
        margin: "2px 0 1px 0",
        lineHeight: "1.2",
      },

      h2: {
        fontSize: "24px",
        fontWeight: "600",
        margin: "1.4em 0 1px 0",
        lineHeight: "1.3",
      },

      h3: {
        fontSize: "20px",
        fontWeight: "600",
        margin: "1.4em 0 1px 0",
        lineHeight: "1.4",
      },

      h4: {
        fontSize: "18px",
        fontWeight: "600",
        margin: "1.4em 0 1px 0",
        lineHeight: "1.4",
      },

      h5: {
        fontSize: "16px",
        fontWeight: "600",
        margin: "1.4em 0 1px 0",
        lineHeight: "1.4",
      },

      h6: {
        fontSize: "16px",
        fontWeight: "500",
        margin: "1.4em 0 1px 0",
        lineHeight: "1.4",
      },

      p: {
        margin: "1px 0",
        fontSize: "16px",
        lineHeight: "1.5",
      },

      "ul, ol": {
        paddingLeft: "1.7em",
        margin: "1px 0",
      },

      li: {
        margin: "1px 0",
        lineHeight: "1.5",
      },

      hr: {
        border: "none",
        borderTop: `1px solid ${theme.color.border}`,
        margin: "1.5rem 0",
      },

      // 링크
      a: {
        color: "#0969da",
        textDecoration: "underline",
        textUnderlineOffset: "2px",

        "&:hover": {
          backgroundColor: "rgba(9, 105, 218, 0.1)",
        },
      },
    },
  })},
`;

export default MarkDownEditor;
