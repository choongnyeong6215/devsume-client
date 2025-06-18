import { TECH_STACK } from "@/constants/techStack";
import Input from "@/features/resume/components/formField/Input.tsx";
import { X } from "lucide-react";
import { ChangeEvent, useMemo, useState } from "react";
import styled from "@emotion/styled";

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  const handleChangeSearchWorld = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleRemoveStack = (stack: string) => {
    setSelectedStack((prev) => prev.filter((v) => v !== stack));
  };

  const handleAddStack = (stack: string) => {
    setSelectedStack((prev) => [...prev, stack]);
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

  return (
    <Wrapper>
      <Input value={searchWord} onChange={handleChangeSearchWorld} />
      {searchWord && teckStackList.length && (
        <DropDown>
          {teckStackList.map((stack) => (
            <li key={stack} onClick={() => handleAddStack(stack)}>
              {stack}
            </li>
          ))}
        </DropDown>
      )}
      <div className="selected-stack">
        {selectedStack.map((stack) => (
          <div key={stack}>
            {stack}
            <X onClick={() => handleRemoveStack(stack)} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const DropDown = styled.ul`
  ${({ theme }) => ({
    position: "absolute",
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

export default SearchInput;
