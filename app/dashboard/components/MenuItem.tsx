"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const MenuItem = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      className={cn(
        "bg-transparent p-2 rounded-sm dark:hover:bg-zinc-700  w-full hover:text-foreground text-muted-foreground",
        {
          "dark:bg-zinc-600 bg-zinc-300 dark:text-lime-500 text-lime-800":
            isActive,
        }
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
