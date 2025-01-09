"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Grid,
    InputAdornment,
} from "@mui/material";
import {
    Code as CodeIcon,
    Business as BusinessIcon,
    Description as DescriptionIcon,
    Settings as SettingsIcon,
    Wifi as WifiIcon,
    Storage as StorageIcon,
    Print as PrintIcon,
    Scanner as ScannerIcon,
    Keyboard as KeyboardIcon,
    Scale as ScaleIcon,
    Timer as TimerIcon,
    DesktopWindows as DesktopWindowsIcon,
    PriceCheck as PriceCheckIcon,
    LockOpen as LockOpenIcon,
} from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function NovoPerfilPdv({ open, onClose }) {
    const [formData, setFormData] = useState({
        codigo: "",
        // Configurações do PDV
        impressora: "",
        descricao_impressora: "",
        porta_impressora: "",
        velocidade: "",
        paridade: "",
        sbits: "",
        dbits: "",
        scanner: "",
        porta_scanner: "",
        teclado: "",
        descricao_teclado: "",
        balanca: "",
        porta_balanca: "",
        timeout: "",
        tela_abertura: "",
        descricao_telaAB: "",
        tela_descanso: "",
        descricao_telaD: "",
        tela_consulta: "",
        descricao_telaC: "",
        cod_preco: "",
        status_gaveta: "",
        avanco: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        console.log("Dados do PDV:", formData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
            <DialogTitle className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 text-center font-bold">
            Cadastro de Perfil PDV
            </DialogTitle>
                <DialogContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
                <Grid container spacing={2}>
                {/* Campos principais */}
                    <Grid item xs={12}>
                        {/* <h4>Informações do PDV</h4> */}
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Código"
                            name="codigo"
                            value={formData.codigo}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CodeIcon />
                                        </InputAdornment>
                                    ),
                                    className:
                                    "dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400",
                                },
                                className: "text-gray-700 dark:text-gray-300",

                            }}
                        />
                    </Grid>
               

                    {/* Configurações */}
                    {/* <Grid item xs={12}>
                        <h4>Configuração</h4>
                    </Grid> */}
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Impressora"
                            name="impressora"
                            value={formData.impressora}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PrintIcon />
                                        </InputAdornment>
                                    ),

                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Descrição Impressora"
                            name="descricao_impressora"
                            value={formData.descricao_impressora}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DescriptionIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Porta Impressora"
                            name="porta_impressora"
                            value={formData.porta_impressora}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StorageIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Velocidade"
                            name="velocidade"
                            value={formData.velocidade}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TimerIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Paridade"
                            name="paridade"
                            value={formData.paridade}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SettingsIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Bits de Parada (SBITS)"
                            name="sbits"
                            value={formData.sbits}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StorageIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Bits de Dados (DBITS)"
                            name="dbits"
                            value={formData.dbits}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StorageIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Scanner"
                            name="scanner"
                            value={formData.scanner}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ScannerIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Porta Scanner"
                            name="porta_scanner"
                            value={formData.porta_scanner}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StorageIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Teclado"
                            name="teclado"
                            value={formData.teclado}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <KeyboardIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Descrição Teclado"
                            name="descricao_teclado"
                            value={formData.descricao_teclado}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DescriptionIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Balança"
                            name="balanca"
                            value={formData.balanca}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ScaleIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Porta Balança"
                            name="porta_balanca"
                            value={formData.porta_balanca}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StorageIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Timeout"
                            name="timeout"
                            value={formData.timeout}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TimerIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Tela de Abertura"
                            name="tela_abertura"
                            value={formData.tela_abertura}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DesktopWindowsIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Descrição Tela de Abertura"
                            name="descricao_telaAB"
                            value={formData.descricao_telaAB}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DescriptionIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Tela de Descanso"
                            name="tela_descanso"
                            value={formData.tela_descanso}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DesktopWindowsIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Descrição Tela de Descanso"
                            name="descricao_telaD"
                            value={formData.descricao_telaD}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DescriptionIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Tela de Consulta"
                            name="tela_consulta"
                            value={formData.tela_consulta}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DesktopWindowsIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Descrição Tela de Consulta"
                            name="descricao_telaC"
                            value={formData.descricao_telaC}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <DescriptionIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Código de Preço"
                            name="cod_preco"
                            value={formData.cod_preco}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PriceCheckIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Status da Gaveta"
                            name="status_gaveta"
                            value={formData.status_gaveta}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOpenIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Avanço"
                            name="avanco"
                            value={formData.avanco}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <ArrowForwardIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>

                    {/* Adicione os demais campos seguindo o mesmo padrão */}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Salvar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
