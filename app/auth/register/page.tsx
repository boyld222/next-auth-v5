import { CardWrapper } from "@/components/auth/CardWrapper";
import RegisterForm from "@/components/auth/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account ?"
      backButtonHref="/auth/login"
      showSocial={true}
    >
      <RegisterForm />
    </CardWrapper>
  );
}
