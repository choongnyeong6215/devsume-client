import { CardContext } from "@/context/cardContext";
import { useContext } from "react";

export const useCard = () => {
  const cardContext = useContext(CardContext);

  if (!cardContext) {
    throw new Error(
      "CardContext의 하위 컴포넌트는 CardHeader가 포함되어야 합니다."
    );
  }

  return cardContext;
};
