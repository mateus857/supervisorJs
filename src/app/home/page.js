// app/home/page.js
"use client";

import Sidebar from "../components/sidebar/page";
// import Footer from '../components/footer/page';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-1">
        {/* <Sidebar /> */}
        
        <div className="flex-1 py-8 px-6 sm:px-10 lg:px-12 mx-auto max-w-7xl">
          <div className="px-6 mx-auto max-w-screen-2xl lg:px-12">
            <div className="relative bg-white shadow-lg dark:bg-gray-800 rounded-lg p-5 mb-6">
              <main>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Atalhos rápidos</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Gerencie seus cadastros, processos e relatórios com eficiência.</p>
              </main>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Card Item */}
              {[
                { href: "/cadastros/produtos", color: "text-blue-500", label: "Novo Cadastro", description: "Adicionar novo produto rapidamente.", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2Z" },
                { href: "#", color: "text-green-500", label: "Relatórios", description: "Acessar relatórios.", icon: "M3 3h18v2H3zm0 14h18v2H3zm0-7h18v2H3zm0 7h18v2H3zm0-7h18v2H3zm0-7h18v2H3z" },
                { href: "#", color: "text-yellow-500", label: "Processos", description: "Gerenciar processos.", icon: "M3 3h18v2H3zm0 14h18v2H3zm0-7h18v2H3zm0 7h18v2H3zm0-7h18v2H3zm0-7h18v2H3z" },
                { href: "#", color: "text-red-500", label: "Configurações", description: "Ajustar preferências do sistema.", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z" },
                { href: "#", color: "text-purple-500", label: "Parâmetros", description: "Ajustar parâmetros do sistema.", icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5 11h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2Z" },
                { href: "#", color: "text-orange-500", label: "Enviar carga de produtos", description: "Atualiza banco de dados.", icon: "M2.01 21l20.14-9.43c.68-.32.68-1.28 0-1.6L2.01.54C1.37.27.74.9 1.02 1.54L6 12l-5 10.46c-.28.63.34 1.27.99 1Z" },
                { href: "#", color: "text-teal-500", label: "Imprimir Etiquetas", description: "Imprime etiquetas.", icon: "M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 transition duration-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <svg
                    className={`w-12 h-12 ${item.color} mb-3`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d={item.icon} />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  );
}
