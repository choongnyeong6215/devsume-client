import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "@/features/auth/services/login";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log("login success!");
      navigate("/");
    },
    onError: (err) => {
      // 토스트 메시지
    },
  });
};
