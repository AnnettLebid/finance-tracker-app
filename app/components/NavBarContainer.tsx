import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavbarContainerClasses {
  container: ClassValue;
}

interface NavBarContainerProps {
  classNames?: Partial<NavbarContainerClasses>;
  withLogo?: boolean;
  children: React.ReactNode;
}

const NavBarContainer = ({
  classNames,
  withLogo,
  children,
}: NavBarContainerProps) => {
  return (
    <nav
      className={cn(
        "min-h-12 p-2 border dark:border-neutral-900",
        classNames?.container
      )}
    >
      {withLogo && <Image src="/globe.svg" width={50} height={50} alt="Logo" />}
      {children}
    </nav>
  );
};

export default NavBarContainer;
