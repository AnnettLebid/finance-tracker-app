"use client";
import React, { useState } from "react";
import LoginForm from "../../../components/LoginForm";
import Header from "../../../components/Header";
import { Button } from "@/components/ui/button";
import CreditCardsForm from "../components/CreditCardsForm";

const CreditCardsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container p-12 mx-auto">
      <div className="flex justify-between">
        <Header title={"Credit Cards"} className={"text-3xl font-extrabold"} />
        <Button onClick={() => setIsOpen(!isOpen)}>Add</Button>
        <CreditCardsForm
          open={isOpen}
          onOpenChange={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default CreditCardsPage;
