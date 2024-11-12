import React from "react";
import Image from "next/image";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export interface CreditCard {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cardCompany: string;
  balance: number;
}

const CreditCard = ({ card }: { card: CreditCard }) => {
  const { cardNumber, cardHolderName, expirationDate, cardCompany } = card;
  return (
    <Button className="p-0 min-h-40 min-w-80 text-start">
      <Card
        className={
          "border h-40 w-80 bg-gradient-to-r from-teal-400 to-blue-500 hover:ring-2 p-4 flex flex-col justify-between"
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
