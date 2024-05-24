import { CardWrapper } from "@/components/auth/CardWrapper";
import LoginForm from "@/components/auth/LoginForm";
import React from "react";

export default function Login() {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account ?"
      backButtonHref="/auth/register"
      showSocial={true}
    >
      <LoginForm />
    </CardWrapper>
  );
}
