import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CreditCardInterface {
  id: number;
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cardCompany: string;
  balance: number;
}

const CreditCard = ({
  card,
  isSelected,
  handleClick,
}: {
  card: CreditCardInterface;
  isSelected: boolean;
  handleClick: (card: CreditCardInterface) => void;
}) => {
  const { cardNumber, cardHolderName, expirationDate, cardCompany } = card;
  return (
    <Button
      className={cn("p-0 min-h-40 min-w-80 text-start", {
        "ring-4": isSelected,
      })}
      variant="ghost"
      onClick={() => handleClick(card)}
    >
      <Card
        className={
          "border h-40 w-80 bg-gradient-to-r from-teal-400 to-blue-500 hover:ring-1 p-4 flex flex-col justify-between"
        }
      >
        <div className="flex justify-between">
          <Image src={"/chip.png"} width={35} height={20} alt="credit card" />
          <div className={"font-bold text-3xl"}>{cardCompany}</div>
        </div>
        <div className="font-bold text-muted-foreground text-lg dark:text-white">
          {cardNumber}
        </div>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-xs text-muted-foreground">
              CARD HOLDER
            </p>
            <p className="font-bold text-md">{cardHolderName}</p>
          </div>
          <div>
            <p className="font-bold text-xs text-muted-foreground">
              VALID TILL
            </p>
            <p className="font-bold text-md">{expirationDate}</p>
          </div>
        </div>
      </Card>
    </Button>
  );
};

export default CreditCard;
