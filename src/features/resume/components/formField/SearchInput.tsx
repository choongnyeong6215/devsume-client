import { TECH_STACK } from "@/constants/techStack";
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

  const handleAddStack = (e: React.MouseEvent, stack: string) => {
    e.preventDefault();
    setSelectedStack((prev) => [...prev, stack]);
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // 선택하고 남은 기술스택 리스트
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
    <InputContainer onClick={() => inputRef.current?.focus()}>
      {/* 선택 기술스택 */}
      <Wrapper>
        {selectedStack.map((stack) => (
          <SelectedStackTag key={stack}>
            {stack}
            <X
              size={14}
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveStack(stack);
              }}
            />
          </SelectedStackTag>
        ))}

        {/* 검색어 */}
        <SearchInputField
          ref={inputRef}
          value={searchWord}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChangeSearchWorld}
        />
      </Wrapper>

      {isShowDropDown && (
        <DropDown>
          {teckStackList.map((stack) => (
            <li key={stack} onMouseDown={(e) => handleAddStack(e, stack)}>
              {stack}
            </li>
          ))}
        </DropDown>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  ${({ theme }) => ({
    position: "relative",
    padding: "0.75rem 1rem",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
  })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

const SelectedStackTag = styled.div`
  ${({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    padding: "0.25rem 0.5rem",
    color: "white",
    backgroundColor: theme.button.filled.background,
    fontSize: "0.875rem",
    borderRadius: theme.borderRadius.small,

    svg: {
      cursor: "pointer",
    },
  })}
`;

const SearchInputField = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.25rem;
  font-size: inherit;
`;

const DropDown = styled.ul`
  ${({ theme }) => ({
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    padding: "0.5rem",
    marginTop: "0.25rem",
    backgroundColor: "white",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    listStyle: "none",
    maxHeight: "200px",
    overflowY: "auto",
    zIndex: 10,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

    li: {
      padding: "0.75rem",
      borderRadius: "4px",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: theme.color.border,
      },
    },
  })}
`;

export default SearchInput;
