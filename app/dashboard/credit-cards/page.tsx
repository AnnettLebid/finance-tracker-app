"use client";
import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import { Button } from "@/app/components/ui/button";
import CreditCardsForm from "../components/CreditCardsForm";
import CardsList from "./components/CardsList";
import ChartSection from "./sections/ChartSection";

const myCards = [
  {
    cardHolderName: "John Doe",
    cardNumber: "1234 5678 9010 9993",
    expirationDate: "12/23",
    cardCompany: "Cal",
    balance: -10000,
  },
  {
    cardHolderName: "John Doe",
    cardNumber: "1234 5678 9010 9992",
    expirationDate: "12/23",
    cardCompany: "Max",
    balance: -1250,
  },
  {
    cardHolderName: "John Doe",
    cardNumber: "1234 5678 9010 9991",
    expirationDate: "12/23",
    cardCompany: "Isracard",
    balance: -12563,
  },
];

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
      <section className="mt-10">
        <CardsList cardsData={myCards} />
      </section>
      <ChartSection cardsData={myCards} />
    </div>
  );
};

export default CreditCardsPage;
