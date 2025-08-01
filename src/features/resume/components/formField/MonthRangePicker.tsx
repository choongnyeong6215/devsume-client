import Button from "@/components/Button";
import { CURRENT_YEAR, MONTH } from "@/constants/monthPicker";
import styled from "@emotion/styled";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { getMixYearMonth } from "@/utils/calendar";
import { lighten } from "polished";
import { MonthRangePickerOption } from "../../types";

const MonthRangePicker = () => {
  const [currentYear, setCurrentYear] = useState(CURRENT_YEAR);
  const [startRange, setStartRange] = useState<MonthRangePickerOption | null>(
    null
  );
  const [endRange, setEndRange] = useState<MonthRangePickerOption | null>(null);
  const [isOngoing, setIsOngoing] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const isStartMonth = (monthIndex: number) => {
    return (
      startRange?.year === currentYear && startRange.month === monthIndex + 1
    );
  };

  const isEndMonth = (monthIndex: number) => {
    return endRange?.year === currentYear && endRange.month === monthIndex + 1;
  };

  const isInRange = (monthIndex: number) => {
    if (!startRange || !endRange || isOngoing) return false;

    const currentValue = getMixYearMonth(currentYear, monthIndex + 1);
    const startValue = getMixYearMonth(startRange.year, startRange.month);
    const endValue = getMixYearMonth(endRange.year, endRange.month);

    return currentValue > startValue && currentValue < endValue;
  };

  const handleSelectMonthRange = (monthIndex: number) => {
    const selectedRange = {
      year: currentYear,
      month: monthIndex + 1,
    };

    if (isOngoing) {
      setStartRange(selectedRange);
      setEndRange(null);
    } else {
      // 시작월 설정
      if (!startRange) {
        setStartRange(selectedRange);
        setEndRange(null);
      }
      // 종료월 설정
      else if (!endRange) {
        const startScale = getMixYearMonth(startRange?.year, startRange?.month);
        const endScale = getMixYearMonth(currentYear, selectedRange.month);

        // 같은 기간 선택 시 초기화
        if (startScale === endScale) {
          setStartRange(null);
          setEndRange(null);
        }
        // 시작월이 큰 경우
        else if (startScale > endScale) {
          setStartRange(selectedRange);
          setEndRange(startRange);
        } else {
          setEndRange(selectedRange);
        }
      }
      // 범위 새로 설정
      else {
        setStartRange(selectedRange);
        setEndRange(null);
      }
    }
  };

  const handleOngoing = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setEndRange(null);
    }

    setIsOngoing(isChecked);
  };

  const handleDisplayText = () => {
    if (!startRange?.month) return "YYYY.MM ~ YYYY.MM";

    const startText = `${startRange.year}.${String(startRange.month).padStart(
      2,
      "0"
    )}`;

    if (isOngoing) {
      return `${startText}`;
    } else if (endRange) {
      const endText = `${endRange.year}.${String(endRange.month).padStart(
        2,
        "0"
      )}`;
      return `${startText} ~ ${endText}.`;
    } else {
      return `${startText} ~`;
    }
  };

  // 달력 외부 클릭 감지
  useEffect(() => {
    const handleClickCalendarOutside = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickCalendarOutside);
    }
  }, [isOpen]);

  const handleOpenCalendar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MonthPickerContainer ref={calendarRef}>
      {/* 선택 기간 표시 */}
      <InputField isSelected={!!startRange} onClick={handleOpenCalendar}>
        <span>{handleDisplayText()}</span>
      </InputField>

      {/* 달력 */}
      {isOpen && (
        <DropDown>
          <DropDownHeader>
            <ChevronLeft onClick={() => setCurrentYear((prev) => prev - 1)} />
            <span>{currentYear}</span>
            <ChevronRight onClick={() => setCurrentYear((prev) => prev + 1)} />
          </DropDownHeader>
          <Calendar>
            {MONTH.map((month, index) => (
              <MonthButton
                key={month}
                onClick={() => handleSelectMonthRange(index)}
                isSelected={isStartMonth(index) || isEndMonth(index)}
                isInRange={isInRange(index)}
              >
                {month}
              </MonthButton>
            ))}
          </Calendar>
          {/* 진행중 관리 */}
          <DropDownFooter>
            <div className="check-section">
              <input
                id="ongoing"
                type="checkbox"
                checked={isOngoing}
                onChange={handleOngoing}
              />
              <label htmlFor="ongoing">진행중</label>
            </div>
            <Button
              schema="filled"
              radiusSize="medium"
              onClick={handleOpenCalendar}
            >
              확인
            </Button>
          </DropDownFooter>
        </DropDown>
      )}
    </MonthPickerContainer>
  );
};

const MonthPickerContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputField = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "2.5rem",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    cursor: "pointer",

    "&:focus": {
      border: "1px solid black",
    },

    span: {
      color: isSelected ? "black" : "#858e96",
      padding: "1rem",
    },
  })}
`;

const DropDown = styled.div`
  ${({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    marginTop: "0.25rem",
    backgroundColor: "white",
    border: `1px solid ${theme.color.border}`,
    borderRadius: theme.borderRadius.medium,
    padding: "0 1rem",
  })}
`;

const DropDownHeader = styled.header`
  ${({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    borderBottom: `3px solid ${theme.color.border}`,
    svg: {
      cursor: "pointer",
    },

    span: {
      fontSize: "1.25rem",
      fontWeight: "600",
    },
  })}
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem 0;
`;

const MonthButton = styled.div<{
  isSelected: boolean;
  isInRange: boolean;
}>`
  ${({ theme, isSelected, isInRange }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 1rem",
    backgroundColor: theme.color.background,
    borderRadius: theme.borderRadius.medium,
    cursor: "pointer",

    ...(isSelected && {
      backgroundColor: theme.button.filled.background,
      color: "white",
    }),

    ...(isInRange && {
      backgroundColor: lighten(0.2, theme.button.filled.background),
      color: "white",
    }),

    "&:hover": {
      backgroundColor: isSelected
        ? "#1976d2"
        : isInRange
        ? "#bbdefb"
        : "#f5f5f5",
    },
  })}
`;

const DropDownFooter = styled.footer`
  .check-section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
    font-size: 0.9rem;

    input[type="checkbox"] {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export default MonthRangePicker;
