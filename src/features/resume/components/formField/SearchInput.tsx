import { TECH_STACK } from "@/constants/techStack";
import Input from "@/features/resume/components/formField/Input.tsx";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { X } from "lucide-react";

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [selectedStack, setSelectedStack] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeSearchWorld = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleRemoveStack = (stack: string) => {
    setSelectedStack((prev) => prev.filter((v) => v !== stack));
  };

  const handleAddStack = (e: MouseEvent, stack: string) => {
    e.preventDefault();

    setSelectedStack((prev) => [...prev, stack]);
    inputRef.current?.focus(); // 입력창 포커스 유지
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // 기술스택 리스트
  const teckStackList = useMemo(
    () =>
      TECH_STACK.filter(
        (v) =>
          v.toLowerCase().includes(searchWord.toLowerCase()) &&
          !selectedStack.includes(v)
      ),
    [searchWord, selectedStack]
  );

  const isShowDropDown = isFocused && teckStackList.length > 0;

  return (
    <SelectInputContainer>
      {selectedStack.map((stack) => (
        <SelectedStackList key={stack}>
          {stack}
          <X onClick={() => handleRemoveStack(stack)} />
        </SelectedStackList>
      ))}
      <Input
        ref={inputRef}
        value={searchWord}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChangeSearchWorld}
      />
      {isShowDropDown && (
        <DropDown>
          {teckStackList.map((stack) => (
            <li key={stack} onMouseDown={(e) => handleAddStack(e, stack)}>
              {stack}
            </li>
          ))}
        </DropDown>
      )}
    </SelectInputContainer>
  );
};

const SelectInputContainer = styled.div`
  ${({ theme }) => ({
    position: "relative",
    display: "flex",
  })}
`;

const DropDown = styled.ul`
  ${({ theme }) => ({
    position: "absolute",
    width: "100%",
    padding: "1rem",
    marginTop: "3rem",
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

const SelectedStackList = styled.div`
  ${({ theme }) => ({
    display: "inline-flex",
    backgroundColor: theme.color.background,
    borderRadius: theme.borderRadius.medium,
  })}
`;

export default SearchInput;
