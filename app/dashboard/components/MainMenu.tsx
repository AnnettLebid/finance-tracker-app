import React from "react";
import MenuItem from "./MenuItem";
import { usePathname } from "next/navigation";
const menuItems = [
  { title: "Dashboard", icon: "home", href: "/dashboard" },
  { title: "Users", icon: "users", href: "/dashboard/users" },
  { title: "Credit Cards", icon: "users", href: "/dashboard//credit-cards" },
  { title: "Bank Accounts", icon: "users", href: "/dashboard/bank-accounts" },
  { title: "Settings", icon: "cog", href: "/dashboard/settings" },
];

const MainMenu = () => {
  return (
    <div className="p-4">
      <ul>
        {menuItems.map((item) => (
          <li key={item.title} className="w-full text-left flex">
            <MenuItem href={item.href}>{item.title}</MenuItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
