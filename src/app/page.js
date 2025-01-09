"use client"; // Marca o componente como Client-Side

import Image from "next/image";
import { useRouter } from "next/navigation"; // Usando o router da nova API de navegação do Next.js

export default function Home() {
  const router = useRouter(); // Inicializando o router

  const acessarSistema = () => {
    router.push("/home"); // Redireciona para a página do sistema
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Bem-vindo ao Sistema Supervisor!
        </h1>
        <p className="text-center sm:text-left text-sm text-gray-600 dark:text-gray-400">
          Acesse clicando no botão abaixo.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={acessarSistema}
          >
            Acessar o Sistema
          </button>
        </div>
      </main>
    </div>
  );
}