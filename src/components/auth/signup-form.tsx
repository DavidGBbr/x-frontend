"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";

const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleEnterButton = async () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite seu nome"
        value={nameField}
        onChange={(t) => setNameField(t)}
      />
      <Input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />
      <Input
        password
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
      />

      <Button label="Criar conta" onClick={handleEnterButton} size={1} />
    </>
  );
};

export default SignupForm;
