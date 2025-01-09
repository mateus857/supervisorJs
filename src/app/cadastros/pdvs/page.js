"use client";
import Sidebar from "../../components/sidebar/page";
import { useState } from "react";

import { Button } from '@mui/material';
import { Select, Option } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { PencilIcon } from "@heroicons/react/24/outline";

import NovoPDVModal from "../../components/modal/cadastro_pdv/novo_pdv/page";
import { DocumentIcon, ArrowDownTrayIcon, MagnifyingGlassIcon  } from "@heroicons/react/24/outline";

import {
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  { head: "" }, // Coluna para o ícone de edição
  { head: "" }, // Coluna para o checkbox
  { head: "Código" },
  { head: "Descrição" }, 
  { head: "Empresa" },
  { head: "Tipo" },
  { head: "IP PDV" },
  { head: "Tipo Sat." },
];

const TABLE_ROWS = [
  {
    codigo: "001",
    descricao: "PDV 001",
    empresa: "001",
    tipo: "003",
    ipPdv: "00.00.00.0",
    tipoSat: "01",
  },
  {
    codigo: "002",
    descricao: "PDV 002",
    empresa: "001",
    tipo: "003",
    ipPdv: "00.00.00.0",
    tipoSat: "01",
  },
];

export default function PdvsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSavePDV = (newPDV) => {
    console.log("Novo PDV:", newPDV);
    handleCloseModal();
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* <Sidebar /> */}
      <div className="flex-1 overflow-hidden py-6 px-2 sm:px-3 lg:px-4 mx-auto w-full">
        <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h1 className="text-2xl font-bold">Cadastro de PDV</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie e visualize os PDVs cadastrados no sistema.
              </p>
            </main>
          </div>
        </header>

        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-2">
              <div className="w-full md:w-1/4">
                <Input label="Buscar" className="w-full" />
              </div>

              <div className="flex space-x-2 w-auto mt-2 md:mt-0">
                <button
                  className="bg-white dark:bg-gray-100 border border-gray-300 hover:bg-primary-700 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 px-2 py-2 flex items-center justify-center"
                  variant="contained"
                  onClick={handleOpenModal}>
                  <DocumentIcon className="w-5 h-5" />
                  <span className="hidden md:inline ml-2">Novo</span>
                  </button>
              </div>
            </div>

            {/* Tabela */}
            <Card className="h-full w-full overflow-auto">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    {TABLE_HEAD.map((col, i) => (
                      <th
                        key={i}
                        className="p-2 text-left text-gray-700 dark:text-gray-200 font-medium"
                      >
                        {col.head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row) => (
                    <tr key={row.codigo}>
                      <td className="p-2 dark:bg-gray-800 dark:text-gray-200">
                        <input type="checkbox" />
                      </td>
                      <td className="p-2 dark:bg-gray-800 dark:text-gray-200">
                        <IconButton size="small">
                          <Edit className="text-primary-500" />
                        </IconButton>
                      </td>
                      {Object.values(row).map((value, i) => (
                        <td
                          key={i}
                          className="p-2 dark:bg-gray-800 dark:text-gray-200 truncate"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>

      </div>

      {/* Modal de Novo PDV */}
      <NovoPDVModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePDV}
      />
    </div>
  );
}
