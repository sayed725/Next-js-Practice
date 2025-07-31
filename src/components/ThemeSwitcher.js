"use client"
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
        onClick={toggleTheme}
     className=" ">
      {theme === "light" ? <MoonIcon size={6} /> : <SunIcon size={6} />}
    </Button>
  );
};
