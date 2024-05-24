"use client";

import { useRouter } from "next/navigation";

enum Mode {
  Modal = "modal",
  Redirect = "redirect",
}

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: Mode;
  asChild?: "boolean";
}

export const LoginButton = ({
  children,
  mode = Mode.Redirect,
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
    console.log("Check");
  };

  if (mode === Mode.Modal) {
    return <span>Modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
