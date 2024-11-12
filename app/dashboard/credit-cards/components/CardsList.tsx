import React from "react";
import Card, { CreditCard } from "./CreditCard";

const CardsList = ({ cardsData }: { cardsData: CreditCard[] }) => {
  return (
    <ul className="flex gap-4">
      {cardsData.map((card) => (
        <li key={card.cardNumber}>
          <Card card={card}></Card>
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
