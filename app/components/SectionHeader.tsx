import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

interface SectionHeaderClasses {
  root?: ClassValue;
  header?: ClassValue;
}

interface HeaderProps {
  title: string;
  classNames?: Partial<SectionHeaderClasses>;
  children?: React.ReactNode;
}

const SectionHeader = ({ title, classNames, children }: HeaderProps) => {
  return (
    <div className={cn(classNames?.root)}>
      <div className={cn("font-bold text-xl", classNames?.header)}>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default SectionHeader;
