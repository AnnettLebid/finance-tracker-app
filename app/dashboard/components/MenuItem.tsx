"use client";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
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
        "bg-transparent p-2 rounded-sm dark:hover:bg-zinc-700 hover:bg-zinc-600 w-full hover:text-foreground text-muted-foreground",
        {
          "bg-zinc-600 text-lime-500": isActive,
        }
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
