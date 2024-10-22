import React, { useState } from "react";
import { Envelope, Lock, User } from "@phosphor-icons/react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  const handleForgotPassword = () => {
    // Lógica para redirecionar ou mostrar o modal de recuperação de senha
    console.log("Esqueci a minha senha");
  };

  const handleFirstAccess = () => {
    // Lógica para redirecionar para o formulário de cadastro
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
        <div className="mt-8 flex">
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
        </div>
        <div className="mt-4 flex">
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
        </div>
        <button
          className="mt-1 text-sm text-cyan-700"
          type="button"
          onClick={handleForgotPassword}
        >
          Esqueceu a senha?
        </button>
        <div className="mt-10 grid gap-4">
          <button
            className="py-2 rounded-lg text-white text-lg bg-cyan-700"
            type="submit"
          >
            Entrar
          </button>
          <button
            className="py-2 rounded-lg text-white text-lg bg-cyan-500 "
            type="button"
            onClick={handleFirstAccess}
          >
            Primeiro acesso
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
