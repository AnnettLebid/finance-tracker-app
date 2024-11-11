"use client";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-4">
      <label htmlFor="theme-switch">Light</label>
      <Switch
        id="theme-switch"
        onCheckedChange={() =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark"))
        }
      />
      <label htmlFor="theme-switch">Dark</label>
    </div>
  );
};

export default ThemeSwitcher;
