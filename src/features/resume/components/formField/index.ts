import Root from "@/features/resume/components/formField/Root";
import Label from "@/features/resume/components/formField/Label";
import Description from "@/features/resume/components/formField/Description";
import Input from "@/features/resume/components/formField/Input";
import ErrorMessage from "@/features/resume/components/formField/ErrorMessage";
import TextArea from "@/features/resume/components/formField/TextArea";
import ProfileUplodaer from "@/features/resume/components/upload/ProfileUploader";
import PortfolioUploader from "@/features/resume/components/upload/PortfolioUploader";
import MarkdownEditor from "@/features/resume/components/formField/MarkdownEditor";
import SelectInput from "@/features/resume/components/formField/SelectInput";
import SearchInput from "@/features/resume/components/formField/SearchInput";

export const FormField = Object.assign(Root, {
  Label,
  Description,
  Input,
  ErrorMessage,
  TextArea,
  ProfileUplodaer,
  PortfolioUploader,
  MarkdownEditor,
  SelectInput,
  SearchInput,
});
