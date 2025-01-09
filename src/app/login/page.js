"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import para redirecionar para outra página

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Usuário e senha fixos para autenticação básica
    const validUsername = "admin";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
      setError("");
      router.push("/home"); // Redireciona para a página 'home'
    } else {
      setError("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-white-800 to-primary p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-md sm:max-w-3xl flex flex-col sm:flex-row animate-fade-in">
        
        {/* Coluna esquerda com logo e informações */}
        <div className="hidden sm:flex sm:w-1/2 bg-blue-100 flex-col items-center justify-center p-4 sm:p-8 space-y-4">
          <p className="text-center text-gray-600 text-sm sm:text-base">
            Bem-vindo(a) ao Sistema Supervisor! Faça login para continuar.
          </p>
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="w-25 h-25 sm:w-43 sm:h-43 transition-transform transform hover:scale-110 duration-300 ease-in-out"
          />
        </div>

        {/* Coluna direita com o formulário */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">Login</h2>

          {/* Exibe mensagem de erro, se houver */}
          {error && <p className="text-center text-red-500 mb-4">{error}</p>}

          {/* Formulário de Login */}
          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Usuário</label>
              <div className="flex items-center border border-gray-300 rounded-md focus-within:border-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A5.002 5.002 0 0012 17a5.002 5.002 0 006.879.804M12 14v-.01M12 10a4 4 0 00-4 4m8-4a4 4 0 00-4 4"
                  />
                </svg>
                <input
                  type="text"
                  name="username"
                  className="w-full px-3 py-2 border-none focus:outline-none"
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="flex items-center border border-gray-300 rounded-md focus-within:border-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c-1.105 0-2 .895-2 2v5a2 2 0 002 2h0a2 2 0 002-2v-5a2 2 0 00-2-2zm1-7a3 3 0 00-6 0 3 3 0 006 0z"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border-none focus:outline-none"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Botão de Login */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded hover:bg-blue-700 transition-transform transform hover:scale-105 duration-200"
            >
              Entrar
            </button>

            {/* Link para suporte */}
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Suporte ou atendimento
              </a>
            </div>
          </form>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-4 sm:mt-6">
            ©Desenvolvido por Unity Sistemas
          </div>
        </div>
      </div>
    </div>
  );
}
