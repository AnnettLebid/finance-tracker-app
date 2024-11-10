import React from "react";
import NavBarContainer from "./NavBarContainer";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  return (
    <NavBarContainer
      classNames={{
        container: "ml-auto bg-muted flex justify-end items-center px-4",
      }}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </NavBarContainer>
  );
};

export default NavBar;
