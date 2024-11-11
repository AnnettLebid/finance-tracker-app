import React from "react";
import Card, { CreditCard } from "./CreditCard";

const CardsList = ({ cards }: { cards: CreditCard[] }) => {
  return (
    <ul className="flex gap-4">
      {cards.map((card) => (
        <li key={card.cardNumber}>
          <Card card={card}></Card>
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
