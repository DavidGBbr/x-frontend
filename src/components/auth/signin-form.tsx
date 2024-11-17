"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = async () => {
    router.replace("/home");
  };

  return (
    <>
      <input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(e) => setEmailField(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(e) => setPasswordField(e.target.value)}
      />

      <button onClick={handleEnterButton}>Entrar</button>
    </>
  );
};

export default SigninForm;
