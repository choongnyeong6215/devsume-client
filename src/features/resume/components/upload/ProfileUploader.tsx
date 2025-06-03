import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import { useFormField } from "@/hooks/useFormField";
import { Trash2, Upload, UserPen } from "lucide-react";
import Label from "@/features/resume/components/formField/Label";
import { darken } from "polished";

const ProfileUploader = () => {
  const { id } = useFormField();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleUploadProfile = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];

    // 미리보기
    if (uploadedFile) {
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setPreviewImage(fileReader.result as string);
      };

      fileReader.readAsDataURL(uploadedFile);
    }
  };

  const handleRemoveProfile = () => {
    setPreviewImage(null);
  };

  return (
    <UploadSection isUpload={!!previewImage}>
      <input id={id} type="file" onChange={handleUploadProfile} />
      {previewImage ? (
        <>
          <Overlay className="overlay" />
          <img src={previewImage} alt="프로필 사진" />
          <ButtonZip className="button-zip">
            <Label>
              <Upload />
            </Label>
            <Trash2 onClick={handleRemoveProfile} />
          </ButtonZip>
        </>
      ) : (
        <div className="upload-guide">
          <Label>
            <UserPen />
          </Label>
        </div>
      )}
    </UploadSection>
  );
};

const UploadSection = styled.div<{ isUpload: boolean }>`
  ${({ theme, isUpload }) => ({
    position: "relative",
    width: "10rem",
    height: "10rem",
    overflow: "hidden",
    border: `3px ${isUpload ? "solid" : "dashed"} ${theme.color.border}`,
    borderRadius: theme.borderRadius.large,

    "&:hover": {
      cursor: "pointer",
      backgroundColor: darken(0.01, theme.color.background),
    },

    "&:hover .overlay": {
      opacity: 0.5,
    },

    "&:hover .button-zip": {
      opacity: 1,
    },
  })}

  input {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .upload-guide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 5rem;
      height: 5rem;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
`;

const ButtonZip = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
  opacity: 0;

  svg {
    width: 2rem;
    height: 2rem;
    color: #fff;

    &:hover {
      cursor: pointer;
      color: #ff3f33;
    }
  }
`;

export default ProfileUploader;
