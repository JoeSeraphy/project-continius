import React, { useState } from "react";
import { Envelope, Lock, User } from "@phosphor-icons/react";
import Buttons from "./Buttons";

interface errorProps {
  email?: string;
  password?: string;
}

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<errorProps>({});

  function validateForm() {
    const newErrors: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email é obrigatório.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email inválido.";
    }

    if (!password) {
      newErrors.password = "Senha é obrigatória";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();
  };

  const handleForgotPassword = () => {
    console.log("Esqueci a minha senha");
  };

  const handleFirstAccess = () => {
    console.log("Primeiro acesso");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid items-center justify-center w-screen"
    >
      <div className="border border-cyan-500 p-10 rounded-xl">
        <User
          size={80}
          weight="light"
          color="#f8f7f7"
          className="bg-cyan-700 p-1 rounded-full flex justify-center mx-auto -mt-20"
        />
        <div>
          <h2 className="text-4xl text-cyan-700 font-bold">Login</h2>
        </div>
        <div className="mt-8 flex relative">
          <label htmlFor="email" className="bg-cyan-700 px-2">
            <Envelope
              size={28}
              weight="light"
              color="#f8f7f7"
              className="mt-1"
            />
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Digite seu e-mail"
            className="border-b border-cyan-700  py-1 px-4 outline-none"
          />
          {error.email && (
            <span className="text-red-600 text-xs top-8 absolute">
              {error.email}
            </span>
          )}
        </div>
        <div className="mt-4 flex relative">
          <label htmlFor="password" className="bg-cyan-700  px-2">
            <Lock size={28} weight="light" color="#f8f7f7" className="mt-1" />
          </label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Digite sua senha"
            className="border-b border-cyan-700 py-1 px-4 outline-none"
          />
          {error.password && (
            <span className="text-red-600 text-xs top-8 absolute">
              {error.password}
            </span>
          )}
        </div>
        <Buttons
          title={"Esqueceu a senha?"}
          onClick={handleForgotPassword}
          className={"mt-4 text-sm text-cyan-700"}
        />
        <div className="mt-10 grid gap-4">
          <Buttons
            type="submit"
            title={"Entrar"}
            className={"py-2 rounded-lg text-white text-lg bg-cyan-700"}
          />
          <Buttons
            type="button"
            title={"Primeiro acesso"}
            className={"py-2 rounded-lg text-white text-lg bg-cyan-500"}
            onClick={handleFirstAccess}
          />
        </div>
      </div>
    </form>
  );
}
