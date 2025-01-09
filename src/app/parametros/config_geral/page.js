"use client";
import Sidebar from "../../components/sidebar/page";
import { Input, Radio, Card, List, ListItem, ListItemPrefix, Typography, Button } from "@material-tailwind/react";

export default function Config_geral() {
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="flex-1 overflow-hidden py-6 px-2 sm:px-3 lg:px-4 mx-auto max-w-7xl">
                <header className="px-4 mx-auto max-w-screen-2xl lg:px-12 mb-8">
                    <div className="bg-white shadow-md dark:bg-gray-800 rounded-lg p-6">
                        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Configuração Geral</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Gerencie e visualize as configurações do sistema.
                        </p>
                    </div>
                </header>

                <div className="px-4 mx-auto max-w-screen-2xl lg:px-12 space-y-6">
                    {/* Seções de configuração com responsividade */}
                    <ConfigSection title="Geral">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Input label="Troca imagens descanso (seg)" />
                            <Input label="Troca ofertas descanso (seg)" />
                            <Input label="Tempo ativar descanso" />
                            <Input label="Quantidade cupom reimpressão" />
                            <Input label="Nome preço venda" />
                            <Input label="Nome preço venda 1" />
                            <Input label="Nome preço venda 2" />
                            <Input label="Nome preço venda 3" />
                            <Input label="Nome preço venda 4" />
                            <Input label="Nome preço venda 5" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <OptionField label="Mostrar ofertas descanso:" options={["Sim", "Não"]} />
                            <OptionField label="Habilita Clube descanso:" options={["Sim", "Não"]} />
                        </div>
                    </ConfigSection>

                    <ConfigSection title="Operador">
                        <OptionField label="Confirma Ob. Ab. Parcial:" options={["Sim", "Não"]} />
                    </ConfigSection>

                    <ConfigSection title="Supervisor">
                        <OptionField label="Liberação Supervisor Retaguarda:" options={["Sim", "Não"]} />
                    </ConfigSection>

                    <ConfigSection title="Comunicação Sync">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Input label="Endereço Sync" />
                            <Input label="Porta Sync" />
                            <Input label="Context" />
                        </div>
                    </ConfigSection>

                    <ConfigSection title="Configurações de Produtos e Packs">
                        <List className="space-y-3">
                            <CheckboxItem label="Permite produtos em oferta receber desconto" />
                            <CheckboxItem label="Habilita detalhamento movimento de meios de pagamento no fechamento caixa" />
                            {/* Adicione outros itens de configuração conforme necessário */}
                        </List>
                    </ConfigSection>

                    <div className="flex flex-col sm:flex-row justify-end mt-8 space-y-4 sm:space-y-0 sm:space-x-4 px-4">
                        <Button
                            type="button"
                            color="red"
                            variant="outlined"
                            className="w-full sm:w-auto px-6 py-2 text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition-colors"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="button"
                            color="green"
                            className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors"
                        >
                            Salvar Alterações
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Componentes auxiliares para reutilização e simplificação

function ConfigSection({ title, children }) {
    return (
        <div className="bg-white shadow-md dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">{title}</h2>
            {children}
        </div>
    );
}

function OptionField({ label, options }) {
    return (
        <div className="flex items-center space-x-4">
            <Typography className="text-gray-700 dark:text-gray-200">{label}</Typography>
            {options.map((option, index) => (
                <Radio
                    key={index}
                    id={`radio-${label}-${option}`}
                    name={label}
                    label={option}
                    className="text-blue-gray-700 dark:text-gray-300"
                />
            ))}
        </div>
    );
}

function CheckboxItem({ label }) {
    return (
        <div className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-gray-600 dark:text-gray-400" />
            <Typography className="text-gray-700 dark:text-gray-300">{label}</Typography>
        </div>
    );
}
