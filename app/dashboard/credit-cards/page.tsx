"use client";
import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import { Button } from "../../../components/ui/button";
import CreditCardsForm from "../components/CreditCardsForm";
import CardsList from "./components/CardsList";
import ChartSection from "./sections/ChartSection";
import { CreditCardInterface } from "./components/CreditCard";

const myCards = [
  {
    id: 1,
    cardHolderName: "John Doe",
    cardNumber: "1234 5678 9010 9993",
    expirationDate: "12/23",
    cardCompany: "Cal",
    balance: -10000,
  },
  {
    id: 2,
    cardHolderName: "John Doe",
    cardNumber: "1234 5678 9010 9992",
    expirationDate: "12/23",
    cardCompany: "Max",
    balance: -1250,
  },
  {
    id: 3,
    cardHolderName: "John Doe",
    cardNumber: "1234 5678 9010 9991",
    expirationDate: "12/23",
    cardCompany: "Isracard",
    balance: -12563,
  },
];

const CreditCardsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CreditCardInterface>(
    myCards[0]
  );
  const handleCard = (card: CreditCardInterface) => setSelectedCard(card);

  return (
    <div className="p-8 mx-auto w-full">
      <div className="flex justify-between">
        <Header title={"Credit Cards"} className={"text-3xl font-extrabold"} />
        <Button onClick={() => setIsOpen(!isOpen)}>Add</Button>
        <CreditCardsForm
          open={isOpen}
          onOpenChange={() => setIsOpen(!isOpen)}
        />
      </div>
      <section className="mt-5">
        <CardsList
          cardsData={myCards}
          handleClick={handleCard}
          selectedCard={selectedCard}
        />
      </section>
      <ChartSection cardsData={myCards} />
    </div>
  );
};

export default CreditCardsPage;
