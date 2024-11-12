import cn from "clsx";
import { ClassValue } from "clsx";
import PieChart from "../components/PieChart";
import Header from "@/app/components/Header";
import { CreditCard } from "../components/CreditCard";

const ChartSection = ({
  className,
  cardsData,
}: {
  className?: ClassValue;
  cardsData: CreditCard[];
}) => {
  const chartData = cardsData.map((card) => {
    return {
      companyName: card.cardCompany,
      cardNumber: `****${card.cardNumber.slice(-4)}`,
      value: Math.abs(card.balance / 2),
    };
  });

  return (
    <section className={cn("mt-10", className)}>
      <Header title="Expenses" className={cn("font-extrabold text-3xl")} />
      <PieChart chartData={chartData} />
    </section>
  );
};

export default ChartSection;
