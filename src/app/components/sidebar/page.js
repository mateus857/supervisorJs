"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import ThemeBtn from "../../components/theme_btn/page";
import Header from "../header/page";
import { useSidebar } from "../../components/SidebarContext";

import {
  IconButton,
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon,
  UserGroupIcon,
  UsersIcon,
  DocumentIcon,
  CogIcon,
  ExclamationCircleIcon,
  LogoutIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


export default function Sidebar() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Considera "desktop" a partir de 768px
    };
    handleResize(); // Atualiza o estado ao carregar
    window.addEventListener("resize", handleResize); // Monitora mudanças no tamanho da janela
    return () => window.removeEventListener("resize", handleResize); // Remove o evento ao desmontar
  }, []);

  // Tema atual, inicializado como "light"
  const [theme, setTheme] = useState("light");

  // Controle de visibilidade da sidebar fixa (apenas em desktops)
  const { isSidebarVisible, toggleSidebar } = useSidebar(); // Usa o contexto para controle da visibilidade

  // Controle do estado do Drawer (aberto ou fechado) - usado em dispositivos móveis
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Estado do Accordion aberto (gerencia se um item da lista está expandido ou não)
  const [open, setOpen] = useState(0);

  // Recupera o tema salvo no localStorage ao carregar o componente
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Recupera o tema salvo ou define como "light" por padrão
    setTheme(savedTheme); // Atualiza o estado do tema
    document.documentElement.classList.toggle("dark", savedTheme === "dark"); // Adiciona ou remove a classe "dark" do elemento raiz
  }, []);

  // Alterna entre os temas "light" e "dark"
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"; // Define o novo tema
    setTheme(newTheme); // Atualiza o estado do tema
    document.documentElement.classList.toggle("dark", newTheme === "dark"); // Atualiza a classe no elemento raiz
    localStorage.setItem("theme", newTheme); // Salva o tema no localStorage
  };

  // Alterna a visibilidade do Drawer
  const toggleDrawer = () => {
    // Em telas grandes, alterna a visibilidade da sidebar fixa
    if (window.innerWidth >= 768) {
toggleSidebar();
    } else {
      // Em telas pequenas, alterna o Drawer
      setIsDrawerOpen((prev) => !prev);
    }
  };
  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };


  // Alterna qual Accordion está aberto (expande ou colapsa o item selecionado)
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value); // Define o item aberto ou fecha se já está aberto
  };

  // Abre o Drawer (para dispositivos móveis)
  const openDrawer = () => setIsDrawerOpen(true);

  // Fecha o Drawer
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Header fixo no topo */}
      {/* <Header toggleDrawer={handleDrawerToggle} /> */}
      {/* <Header toggleDrawer={toggleSidebar} /> */}
      <Header toggleDrawer={isDesktop ? toggleSidebar : handleDrawerToggle} />

      {/* Botão para alternar o tema (light/dark) */}
      <ThemeBtn toggleTheme={toggleTheme} theme={theme} />

    {/* Botão de alternância de sidebar no desktop */}
    <div className="hidden md:block fixed top-4 left-4 z-50">
  <IconButton
    variant="text"
    size="lg"
    onClick={toggleSidebar}
    className="bg-white dark:bg-gray-800 shadow-lg rounded-full"
  >
    {isSidebarVisible ? (
      <Bars3Icon className="h-8 w-8 text-black dark:text-white" />
    ) : (
      <Bars3Icon className="h-8 w-8 text-black dark:text-white" />
    )}
  </IconButton>
</div>


      {/* Drawer para dispositivos móveis */}
      <Drawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="md:hidden"
        ModalProps={{
          disableBackdropClick: false, // Permite clicar no overlay para fechar
          keepMounted: true,
        }}
      >
        <div
          className={`h-full w-[17rem] p-4 shadow-xl ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <SidebarContent
            toggleTheme={toggleTheme}
            theme={theme}
            handleOpen={handleOpen}
            open={open}
          />
        </div>
      </Drawer>
      {/* Sidebar fixa para desktops */}
{isSidebarVisible && (
  <div
    className={`hidden md:block fixed top-[72px] left-0 h-[calc(100vh-72px)] w-[17rem] p-4 shadow-xl ${
      theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
    }`}
  >
    <SidebarContent 
      theme={theme} 
      handleOpen={handleOpen} 
      open={open} 
    />
  </div>
)}

      <div
        className={`pt-[72px] transition-all duration-300`}
        style={{
          // Ajuste dinâmico da largura do conteúdo
          marginLeft: isSidebarVisible ? "17rem" : "0", // Ajuste da margem à esquerda
          width: isSidebarVisible ? "calc(100% - 17rem)" : "100%", // Ajuste da largura
        }}
      >
        {/* Conteúdo principal */}
      </div>
    </>
  );
}


function SidebarContent({ toggleTheme, theme, handleOpen, open }) {
  return (
    <>
      {/* Exemplo de cabeçalho opcional para a sidebar (com logo e nome do sistema) */}
      {/* 
      <div className="flex items-center mb-2 p-2 justify-left space-x-3">
        <img src="/images/logo.jpg" alt="Logo" className="w-12 h-auto" />
        <Typography variant="h5" color={theme === "dark" ? "white" : "gray"}>
          Supervisor
        </Typography>
      </div>
      */}

      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <Link href="/home" passHref>
            <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <ListItem className={`p-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`} selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 p-3 ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <DocumentIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color={theme === "dark" ? "white" : "blue-gray"} className="mr-auto font-normal">
                Cadastros
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href="/cadastros/produtos" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Produtos
                </ListItem>
              </Link>
               <Link href="/cadastros/pdvs/perfil_pdv" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Perfil PDV
                </ListItem>
              </Link>
                <Link href="/cadastros/pdvs" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  PDVs
                </ListItem>
              </Link>
             {/* <Link href="/cadastros/grupo_usuarios" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Grupo Usuários
                </ListItem>
              </Link>
              <Link href="/cadastros/usuarios" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Usuários
                </ListItem>
              </Link> */}
            </List>
          </AccordionBody>
        </Accordion>

        {/* Outro accordion e itens */}
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          {/* <Link href="/processos" passHref>
            <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <ExclamationCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Processos
            </ListItem>
          </Link>
          <Link href="/relatorios" passHref>
            <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <DocumentIcon className="h-5 w-5" />
              </ListItemPrefix>
              Relatórios
            </ListItem>
          </Link> */}
          <ListItem className={`p-0 ${theme === "dark" ? "text-white" : "text-gray-800"}`} selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 p-3 ${theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}>
              <ListItemPrefix>
                <CogIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color={theme === "dark" ? "white" : "blue-gray"} className="mr-auto font-normal">
                Parâmetros
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link href="/parametros/config_geral" passHref>
                <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Configuração Geral
                </ListItem>
              </Link>
              {/* <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Configuração Empresa
              </ListItem>
              <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Processa Excepcionais
              </ListItem> */}
            </List>
          </AccordionBody>
        </Accordion>

        <Link href="/" passHref>
          <ListItem className={`${theme === "dark" ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"}`}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Logout
          </ListItem>
        </Link>
      </List>

      {/* <div className="flex justify-center mb-4">
  <IconButton onClick={toggleTheme} variant="text" size="lg">
    {theme === "light" ? (
      <MoonIcon className="h-5 w-5 text-black" /> // Ícone escuro para modo claro
    ) : (
      <SunIcon className="h-5 w-5 text-white" /> // Ícone claro para modo escuro
    )}
  </IconButton>
</div> */}

    </>
  );
}
