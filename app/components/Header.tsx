import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface HeaderProps {
  title: string;
  className?: ClassValue;
}

const Header = ({ title, className }: HeaderProps) => {
  return <h3 className={cn("font-bold, text-xl", className)}>{title}</h3>;
};

export default Header;
