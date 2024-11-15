import React from "react";
import NavBarContainer from "./NavBarContainer";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <NavBarContainer
      classNames={{
        container: "ml-auto bg-muted flex justify-end items-center px-4 gap-4",
      }}
    >
      <ThemeSwitcher />
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </NavBarContainer>
  );
};

export default NavBar;
