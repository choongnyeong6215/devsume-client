import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { join } from "@/features/auth/services/join";

export const useJoin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: join,
    onSuccess: () => {
      console.log("join success!");
      navigate("/login");
    },
    onError: (err) => {
      // 토스트 메시지
    },
  });
};
