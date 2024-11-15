"use client";
import React from "react";
import MainMenu from "./components/MainMenu";
import NavBar from "../components/NavBar";
import { SplitScreen } from "../components/SplitScreen";
import { AppSidebar } from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />

          {children}
        </SidebarProvider>
      </div>
    </>
  );
};

export default DashboardLayout;
