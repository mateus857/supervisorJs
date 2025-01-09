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


export default function NovoPdvModal({ open, onClose }) {
    const [formData, setFormData] = useState({
        codigo: "",
        empresa: "",
        descricao: "",
        tipo: "",
        ipPdv: "",
        tipoSat: "",
        // Configurações do PDV
        perfil_pdv: "",
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
            Cadastro de PDV
            </DialogTitle>
                <DialogContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
                <Grid container spacing={2}>
                {/* Campos principais */}
                    <Grid item xs={12}>
                        <h4>Informações do PDV</h4>
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
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Empresa"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BusinessIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Descrição"
                            name="descricao"
                            value={formData.descricao}
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
                            label="IP PDV"
                            name="ipPdv"
                            value={formData.ipPdv}
                            onChange={handleChange}
                            fullWidth
                            size="small" // Adicione esta linha para inputs mais compactos

                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <WifiIcon />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <TextField
                            label="Tipo"
                            name="tipo"
                            value={formData.tipo}
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
                            label="Tipo Sat."
                            name="tipoSat"
                            value={formData.tipoSat}
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
                            label="Perfil PDV"
                            name="perfil_pdv"
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
