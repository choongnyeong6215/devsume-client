import styled from "@emotion/styled";
import { useState } from "react";
import { SelectOption } from "@/features/resume/types/index.ts";
import { ChevronDown } from "lucide-react";

interface SelectInputProps {
  options: SelectOption[];
  placeholder: string;
}

const SelectInput = ({ options, placeholder }: SelectInputProps) => {
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const [showOption, setShowOption] = useState<boolean>(false);

  const handleShowSelectBox = () => {
    setShowOption((prevOption) => !prevOption);
  };

  const handleSelectOption = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <SelectBox isSelect={!!currentValue} onClick={handleShowSelectBox}>
      <p>{currentValue ? currentValue : placeholder}</p>
      <ChevronDown />
      {showOption && (
        <OptionBox>
          {options.map((option) => (
            <li
              key={option.key}
              onClick={() => handleSelectOption(option.value)}
            >
              {option.value}
            </li>
          ))}
        </OptionBox>
      )}
    </SelectBox>
  );
};

const SelectBox = styled.div<{ isSelect: boolean }>`
  ${({ isSelect, theme }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "2.5rem",
    padding: "1rem",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    zIndex: 1,

    "&:focus": {
      border: "1px solid black",
      outline: "none",
    },

    "&:hover": {
      cursor: "pointer",
    },

    p: {
      color: isSelect ? "black" : theme.color.border,
    },

    svg: {
      color: theme.color.border,
    },
  })}
`;

const OptionBox = styled.ul`
  ${({ theme }) => ({
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    padding: "1rem",
    marginTop: "0.75rem",
    backgroundColor: "white",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    listStyle: "none",
    maxHeight: "200px",
    overflowY: "auto",

    li: {
      padding: "1rem",
      borderRadius: "inherit",

      "&:hover": {
        backgroundColor: theme.color.border,
      },
    },
  })}
`;

export default SelectInput;
