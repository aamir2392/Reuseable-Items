import React from "react";

interface ProductTableCellValueProps {
  headingText: string;
  statistics: string;
  change: string;
  changeType: "positive" | "negative";
}

const ProductTableCellValue: React.FC<ProductTableCellValueProps> = ({
  headingText,
  statistics,
  change,
  changeType,
}) => {
  return (
    <span className="">
      <span className="block mb-0.5 text-sm text-[#7D7D7D]">{headingText}</span>
      <span className="flex justify-center items-center gap-0.5">
        <span className="text-sm text-[#191919] font-semibold ">
          {statistics}
        </span>
        <span
          className={`rounded-md p-1 text-xs min-h-5 max-w-8 ${
            changeType == "positive"
              ? "bg-[#00A7251A] text-[#00A725]"
              : "bg-[#FF00001A] text-[#FF0000]"
          }`}
        >
          {changeType === "positive" ? "+" : "-"}
          {change}
        </span>
      </span>
    </span>
  );
};

export default ProductTableCellValue;
