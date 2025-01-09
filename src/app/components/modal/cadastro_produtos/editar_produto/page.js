"use client";

import React from "react";
import { Button, Input, Select, Option } from "@material-tailwind/react";

export default function EditarProdutoModal({ open, onClose, produto, onSave }) {
  const [formData, setFormData] = React.useState(produto || {});

  React.useEffect(() => {
    if (produto) {
      setFormData(produto); // Preenche o formulário com os dados do produto selecionado
    }
  }, [produto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData); // Passa os dados editados para a função de callback
    onClose(); // Fecha o modal
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        open ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Editar Produto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Campos do formulário */}
          <Input
            label="Código"
            name="codigo"
            value={formData.codigo || ""}
            onChange={handleChange}
            disabled
          />
          <Input
            label="Descrição"
            name="descricao"
            value={formData.descricao || ""}
            onChange={handleChange}
          />
          <Input
            label="Descrição Reduzida"
            name="descricaoReduzida"
            value={formData.descricaoReduzida || ""}
            onChange={handleChange}
          />
          <Input
            label="Diretiva"
            name="diretiva"
            value={formData.diretiva || ""}
            onChange={handleChange}
          />
          <Select
            label="Balança"
            name="bal"
            value={formData.bal || ""}
            onChange={(value) =>
              setFormData({ ...formData, bal: value })
            }
          >
            <Option value="Sim">Sim</Option>
            <Option value="Não">Não</Option>
          </Select>
          <Input
            label="Código Barras"
            name="codigoBarras"
            value={formData.codigoBarras || ""}
            onChange={handleChange}
          />
          <Input
            label="Código NCM"
            name="codigoNCM"
            value={formData.codigoNCM || ""}
            onChange={handleChange}
          />
          <Select
            label="Vasilhame"
            name="vasilh"
            value={formData.vasilh || ""}
            onChange={(value) =>
              setFormData({ ...formData, vasilh: value })
            }
          >
            <Option value="Sim">Sim</Option>
            <Option value="Não">Não</Option>
          </Select>
          <Select
          label="Ativo"
        name="ativo"
        value={formData.ativo}
        onChange={(value) =>
        setFormData({ ...formData, ativo: value })
             }
        >
        <Option value="Sim">Sim</Option>
        <Option value="Não">Não</Option>
      </Select>


          {/* Adicione mais campos conforme necessário */}
        </div>
        <div className="flex justify-end mt-6">
          <Button
            variant="text"
            color="red"
            onClick={onClose}
            className="mr-2"
          >
            Cancelar
          </Button>
          <Button color="green" onClick={handleSave}>
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
}
