import cn from "clsx";
import { ClassValue } from "clsx";
import PieChart from "../components/PieChart";
import Header from "@/app/components/SectionHeader";
import { Card, CardTitle } from "../../../components/ui/card";
import { CreditCardInterface } from "../components/CreditCard";

const ChartSection = ({
  className,
  cardsData,
}: {
  className?: ClassValue;
  cardsData: CreditCardInterface[];
}) => {
  const chartData = cardsData.map((card) => {
    return {
      companyName: card.cardCompany,
      cardNumber: `****${card.cardNumber.slice(-4)}`,
      value: Math.abs(card.balance / 2),
    };
  });

  return (
    <section
      className={cn("mt-5 flex flex-col md:flex-row md:flex-wrap", className)}
    >
      <Header
        title="Expenses"
        classNames={{ root: cn("font-extrabold text-3xl") }}
      />
      <div className="mt-5 gap-5 flex flex-col md:flex-row">
        <Card className="flex items-center justify-center flex-col md:flex-row md:flex-wrap w-full md:min-w-1/2">
          <CardTitle className="p-4 me-auto text-md">
            Total expenses this month
          </CardTitle>
          <PieChart chartData={chartData} />
        </Card>
        <Card className="flex items-center justify-center flex-col md:flex-wrap w-full md:min-w-1/2 md:flex-row">
          <CardTitle className="p-4 me-auto text-md">
            {` Total expenses for the card ${chartData[0].cardNumber}`}
          </CardTitle>
          <PieChart chartData={chartData} />
        </Card>
      </div>
    </section>
  );
};

export default ChartSection;
