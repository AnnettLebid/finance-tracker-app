import SectionHeader from "@/app/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const page = () => {
  return (
    <div className="mt-14 p-4">
      <SectionHeader
        title="Categories"
        classNames={{
          header: cn("font-extrabold text-3xl mr-auto"),
          root: "flex justify-between",
        }}
      >
        <Button>+ New category</Button>
      </SectionHeader>
    </div>
  );
};

export default page;
