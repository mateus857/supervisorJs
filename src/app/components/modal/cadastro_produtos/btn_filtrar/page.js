"use client";
import { useState } from "react";
import { Button, Input, Select, Option } from "@material-tailwind/react";

export default function FiltroModal({ open, onClose, filters, setFilters, onApplyFilters }) {
  if (!open) return null;

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-lg w-full p-8 transform transition-transform duration-300 ease-in-out scale-95 hover:scale-100">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Filtros</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Código
              </label>
              <Input
                id="codigo"
                name="codigo"
                value={filters.codigo}
                onChange={handleFilterChange}
                placeholder="Digite o código"
                className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Descrição
              </label>
              <Input
                id="descricao"
                name="descricao"
                value={filters.descricao}
                onChange={handleFilterChange}
                placeholder="Digite a descrição"
                className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition duration-200"
              />
            </div>
            <div>
              <label htmlFor="ativo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ativo
              </label>
              <Select
                id="ativo"
                name="ativo"
                value={filters.ativo}
                onChange={(value) => setFilters((prevFilters) => ({ ...prevFilters, ativo: value }))}
                className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 transition duration-200"
              >
                <Option value="">Todos</Option>
                <Option value="Sim">Sim</Option>
                <Option value="Não">Não</Option>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <Button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition duration-200"
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                onApplyFilters();
                onClose();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-200"
            >
              Aplicar Filtros
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
