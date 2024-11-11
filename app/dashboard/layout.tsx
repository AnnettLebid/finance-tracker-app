"use client";
import React from "react";
import { SplitScreen } from "../../components/SplitScreen";
import MainMenu from "./components/MainMenu";
import NavBar from "../../components/NavBar";
import { useDisplay } from "../hooks/useDisplay";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useDisplay();
  console.log("is`mobile", isMobile);
  return (
    <>
      <NavBar />
      <SplitScreen classNames={{ leftPanel: "w-64" }}>
        <div className="bg-muted h-screen">
          <MainMenu />
        </div>

        <div className="h-screen">{children}</div>
      </SplitScreen>
    </>
  );
};

export default DashboardLayout;
