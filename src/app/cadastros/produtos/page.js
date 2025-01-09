"use client";
import Sidebar from "../../components/sidebar/page";
import Modal from "../../components/modal/cadastro_produtos/novo_cadastro/page";
import CadastroProdutoModal from '../../components/modal/cadastro_produtos/novo_cadastro/page';
import EditarProdutoModal from '../../components/modal/cadastro_produtos/editar_produto/page';

import FiltroModal from '../../components/modal/cadastro_produtos/btn_filtrar/page';

import { Button } from '@mui/material';
import { Select, Option } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { PencilIcon } from "@heroicons/react/24/outline";


import { useState } from "react";
import { DocumentIcon, ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
  { head: "Emp" },
  { head: "Descrição" },
  { head: "Descrição Reduzida" },
  { head: "Diretiva" },
  { head: "Bal." },
  { head: "Código Barras" },
  { head: "Código NCM" },
  { head: "Vasilh." },
  { head: "CST" },
  { head: "CST Pis" },
  { head: "Pis" },
  { head: "CST Cofins" },
  { head: "Cofins" },
  { head: "Cest" },
  { head: "CTS" },
  { head: "Ativo" },
  { head: "Pr.Venda" },
  { head: "Pr.Venda 1" },
  { head: "Pr.Venda 2" },
  { head: "Pr.Venda 3" },
  { head: "Pr.Venda 4" },
  { head: "Pr.Venda 5" },
  { head: "Oferta" },
  { head: "Pr.Normal" },
  { head: "Cod Tiaa" },
];

const TABLE_ROWS = [
  {
    codigo: "001",
    emp: "Emp1",
    descricao: "Produto A",
    descricaoReduzida: "Prod A",
    diretiva: "D1",
    bal: "Sim",
    codigoBarras: "1234567890123",
    codigoNCM: "10010010",
    vasilh: "Sim",
    cst: "010",
    cstPis: "050",
    pis: "1.65%",
    cstCofins: "060",
    cofins: "7.60%",
    cest: "1234567",
    cts: "CTS1",
    ativo: "Sim",
    prVenda: "$10,00",
    prVenda1: "$9,50",
    prVenda2: "$9,00",
    prVenda3: "$8,50",
    prVenda4: "$8,00",
    prVenda5: "$7,50",
    oferta: "Não",
    prNormal: "$10,00",
    codTiaa: "TIA123",
  },
  {
    codigo: "002",
    emp: "Emp2",
    descricao: "Produto b",
    descricaoReduzida: "Prod b",
    diretiva: "D1",
    bal: "Sim",
    codigoBarras: "1234567890123",
    codigoNCM: "10010010",
    vasilh: "Sim",
    cst: "010",
    cstPis: "050",
    pis: "1.65%",
    cstCofins: "060",
    cofins: "7.60%",
    cest: "1234567",
    cts: "CTS1",
    ativo: "Sim",
    prVenda: "$10,00",
    prVenda1: "$9,50",
    prVenda2: "$9,00",
    prVenda3: "$8,50",
    prVenda4: "$8,00",
    prVenda5: "$7,50",
    oferta: "Não",
    prNormal: "$10,00",
    codTiaa: "TIA123",
  },
  {
    codigo: "003",
    emp: "Emp3",
    descricao: "Produto c",
    descricaoReduzida: "Prod c",
    diretiva: "D3",
    bal: "Sim",
    codigoBarras: "1234567890123",
    codigoNCM: "10010010",
    vasilh: "Sim",
    cst: "010",
    cstPis: "050",
    pis: "1.65%",
    cstCofins: "060",
    cofins: "7.60%",
    cest: "1234567",
    cts: "CTS1",
    ativo: "Sim",
    prVenda: "$10,00",
    prVenda1: "$9,50",
    prVenda2: "$9,00",
    prVenda3: "$8,50",
    prVenda4: "$8,00",
    prVenda5: "$7,50",
    oferta: "Não",
    prNormal: "$10,00",
    codTiaa: "TIA123",
  },
  {
    codigo: "004",
    emp: "Emp4",
    descricao: "Produto d",
    descricaoReduzida: "Prod d",
    diretiva: "D4",
    bal: "Sim",
    codigoBarras: "1234567890123",
    codigoNCM: "10010010",
    vasilh: "Sim",
    cst: "010",
    cstPis: "050",
    pis: "1.65%",
    cstCofins: "060",
    cofins: "7.60%",
    cest: "1234567",
    cts: "CTS1",
    ativo: "Sim",
    prVenda: "$10,00",
    prVenda1: "$9,50",
    prVenda2: "$9,00",
    prVenda3: "$8,50",
    prVenda4: "$8,00",
    prVenda5: "$7,50",
    oferta: "Não",
    prNormal: "$10,00",
    codTiaa: "TIA123",
  },
  {
    codigo: "005",
    emp: "Emp5",
    descricao: "Produto f",
    descricaoReduzida: "Prod F",
    diretiva: "D5",
    bal: "Não",
    codigoBarras: "1234567890123",
    codigoNCM: "10010010",
    vasilh: "Sim",
    cst: "010",
    cstPis: "050",
    pis: "1.65%",
    cstCofins: "060",
    cofins: "7.60%",
    cest: "1234567",
    cts: "CTS1",
    ativo: "Sim",
    prVenda: "$10,00",
    prVenda1: "$9,50",
    prVenda2: "$9,00",
    prVenda3: "$8,50",
    prVenda4: "$8,00",
    prVenda5: "$7,50",
    oferta: "Não",
    prNormal: "$10,00",
    codTiaa: "TIA123",
  },
  // Adicione outros registros conforme necessário
];

export default function ProdutosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  // EDITAR

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduto, setSelectedProduto] = useState(null);

  const handleOpenEditModal = (produto) => {
    setSelectedProduto(produto);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedProduto(null);
  };

  const handleSaveEdit = (updatedProduto) => {
    // Atualize o produto na tabela
    const updatedRows = filteredRows.map((row) =>
      row.codigo === updatedProduto.codigo ? updatedProduto : row
    );
    setFilteredRows(updatedRows);
  };


  // FIM EDITAR
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRows, setFilteredRows] = useState(TABLE_ROWS);
  const [filters, setFilters] = useState({ codigo: "", descricao: "", ativo: "" });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const toggleFiltersModal = () => setFiltersModalOpen(!filtersModalOpen);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    applyFilters(event.target.value.toLowerCase(), filters);
  };

  const applyFilters = (search = searchTerm, filterValues = filters) => {
    const filtered = TABLE_ROWS.filter((row) => {
      const matchesSearch = Object.values(row).some((cell) =>
        cell.toString().toLowerCase().includes(search)
      );
      const matchesFilters =
        (!filterValues.codigo || row.codigo.includes(filterValues.codigo)) &&
        (!filterValues.descricao || row.descricao.toLowerCase().includes(filterValues.descricao.toLowerCase())) &&
        (!filterValues.ativo || row.ativo === filterValues.ativo);

      return matchesSearch && matchesFilters;
    });
    setFilteredRows(filtered);
  };

  
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 overflow-hidden py-6 px-2 sm:px-3 lg:px-4 mx-auto w-full">
        <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <main className="p-4">
              <h1 className="text-2xl font-bold">Cadastro de Produtos</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Gerencie e visualize os produtos cadastrados no sistema.
              </p>
            </main>
          </div>
        </header>

        <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 p-2">
              <div className="w-full md:w-1/4">
                <Input
                  label="Buscar"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full"
                />
              </div>
{/* Inclua o modal fora do tbody */}
<EditarProdutoModal
    open={editModalOpen}
    onClose={handleCloseEditModal}
    produto={selectedProduto}
    onSave={handleSaveEdit}
  />
              <div className="flex space-x-2 w-auto mt-2 md:mt-0">

                <button
                  className="bg-white dark:bg-gray-100 border border-gray-300 hover:bg-primary-700 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-primary-500 px-2 py-2 flex items-center justify-center"
                  variant="contained"
                  onClick={handleOpenModal}>
                  <DocumentIcon className="w-5 h-5" />
                  <span className="hidden md:inline ml-2">Novo</span>
                  </button>
                <CadastroProdutoModal open={modalOpen} onClose={handleCloseModal} />

                {/* <button
                  className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 px-2 py-2 flex items-center justify-center"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  <span className="hidden md:inline ml-2">Ordenar</span>
                </button> */}

                {/* Novo botão de filtro */}
                {/* <Button
                  className="bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg px-2 py-2"
                  onClick={toggleFiltersModal}
                >
                  Filtrar
                </Button> */}
                <button
                  id="filterDropdownButton"
                  onClick={toggleFiltersModal}

                  className="bg-primary-600 border border-gray-300 hover:bg-primary-700 text-gray text-sm rounded-lg focus:ring-2 focus:ring-primary-500 w-auto h-auto px-2 py-2 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {/* Esconder o texto em mobile */}
                  <span className="hidden md:inline ml-2">Filtrar</span>
                </button>

                {/* Modal de filtros */}
                <FiltroModal
                  open={filtersModalOpen}
                  onClose={toggleFiltersModal}
                  filters={filters}
                  setFilters={setFilters}
                  onApplyFilters={applyFilters}
                />
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
                  {filteredRows.map((row) => (
                    <tr key={row.codigo}>
                      <td className="p-2 dark:bg-gray-800 dark:text-gray-200">
                        <input type="checkbox" />
                      </td>
                      <td className="p-2 dark:bg-gray-800 dark:text-gray-200">
                   
                        <IconButton
                          onClick={() => handleOpenEditModal(row)}
                          size="small"
                        >
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
    </div>
  );
}