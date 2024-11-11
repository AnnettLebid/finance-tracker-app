import { Children } from "react";
import { type ClassValue } from "clsx";
import { cn } from "@/lib/utils";

type SplitScreenClasses = {
  leftPanel: ClassValue;
  rightPanel: ClassValue;
};

export const SplitScreen = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  leftWidth?: number;
  rightWidth?: number;
  classNames?: Partial<SplitScreenClasses>;
}) => {
  const [left, right] = Children.toArray(children);

  return (
    <div className="flex">
      <div className={cn("w-1/2", classNames?.leftPanel)}>{left}</div>
      <div className={cn("flex-auto", classNames?.rightPanel)}>{right}</div>
    </div>
  );
};
