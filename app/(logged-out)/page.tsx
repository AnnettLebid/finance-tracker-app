import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InvestingIcon from "../../public/investing.svg";

const LandingPage = () => {
  return (
    <div className="flex gap-5 items-center flex-col md:flex-row md:gap-10">
      <div>
        <h1 className="font-bold">FinApp</h1>
        <h6>Your personal finance tracker</h6>
        <div className="flex gap-2 mt-4">
          <Button asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button variant="outline">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
      <div>
        <Image src={InvestingIcon} alt="logo img" width={400} />
      </div>
    </div>
  );
};

export default LandingPage;
