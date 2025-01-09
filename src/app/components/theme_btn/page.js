"use client";
import { IconButton } from "@material-tailwind/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

export default function ThemeBtn({ toggleTheme, theme }) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <IconButton onClick={toggleTheme} variant="text" size="lg">
        {theme === "light" ? (
          <MoonIcon className="h-6 w-6 text-black" />
        ) : (
          <SunIcon className="h-6 w-6 text-white" />
        )}
      </IconButton>
    </div>
  );
}
