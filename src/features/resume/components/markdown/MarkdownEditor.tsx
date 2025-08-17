import { EditorContent, EditorContext, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useMemo } from "react";
import styled from "@emotion/styled";
import CodeBlock from "@tiptap/extension-code-block";
import { darken } from "polished";
import Link from "@tiptap/extension-link";
import {
  Toolbar,
  ToolbarGroup,
} from "../../../../../@/components/tiptap-ui-primitive/toolbar/toolbar";
import Button from "@/components/Button";

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
      Link.configure({
        HTMLAttributes: {
          class: "editor-link",
        },
      }),
    ],

    content: "",
  });

  const providerValue = useMemo(() => ({ editor }), [editor]);

  return (
    <EditorContext.Provider value={providerValue}>
      <EditorContainer>
        <Toolbar variant="fixed">
          <ToolbarGroup>
            <Button
              schema={editor?.isActive("bold") ? "filled" : "outlined"}
              radiusSize="small"
              onClick={() => editor?.chain().focus().toggleBold().run()}
            >
              <strong>Bold</strong>
            </Button>
            <Button
              schema={editor?.isActive("italic") ? "filled" : "outlined"}
              radiusSize="small"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
            >
              <em>Italic</em>
            </Button>
            <Button
              schema={editor?.isActive("strike") ? "filled" : "outlined"}
              radiusSize="small"
              onClick={() => editor?.chain().focus().toggleStrike().run()}
            >
              <s>Strike</s>
            </Button>
            <Button
              schema={editor?.isActive("link") ? "filled" : "outlined"}
              radiusSize="small"
              onClick={() => {
                const url = window.prompt("링크 URL을 입력하세요:");
                if (url) {
                  editor?.chain().focus().setLink({ href: url }).run();
                }
              }}
            >
              Link
            </Button>
            <Button
              schema={editor?.isActive("codeBlock") ? "filled" : "outlined"}
              radiusSize="small"
              onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
            >
              Code
            </Button>
          </ToolbarGroup>
        </Toolbar>
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
        color: theme.button.filled.background,
        textDecoration: "none",
        cursor: "pointer",
        fontWeight: "bold",
      },
    },
  })},
`;

export default MarkDownEditor;
