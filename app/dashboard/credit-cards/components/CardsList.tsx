import React from "react";
import CreditCard, { CreditCardInterface } from "./CreditCard";

const CardsList = ({
  cardsData,
  handleClick,
  selectedCard,
}: {
  cardsData: CreditCardInterface[];
  selectedCard: CreditCardInterface;
  handleClick: (card: CreditCardInterface) => void;
}) => {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap gap-4">
      {cardsData.map((card) => (
        <li key={card.cardNumber}>
          <CreditCard
            card={card}
            handleClick={handleClick}
            isSelected={selectedCard.id === card.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
