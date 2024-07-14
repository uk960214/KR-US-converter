import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SelectInput from "./SelectInput";
import SaveButton from "./SaveButton";

const sizes = [
  { value: "kr", label: "한국 (mm)" },
  { value: "us", label: "미국 (US)" },
];

const useShoeSizeStore = createConverterStore("shoeSize");

function ShoeSizeConverter() {
  const [sizeSystem, setSizeSystem] = useState("kr");

  const { amount, setAmount, convertedAmount, setConvertedAmount, addHistory } =
    useShoeSizeStore(
      ({
        amount,
        setAmount,
        convertedAmount,
        setConvertedAmount,
        addHistory,
      }) => ({
        amount,
        setAmount,
        convertedAmount,
        setConvertedAmount,
        addHistory,
      })
    );

  useEffect(() => {
    const convertShoeSize = () => {
      let converted;
      if (sizeSystem === "kr") {
        converted = amount - 18; // 단순 변환 로직
      } else {
        converted = amount + 18; // 단순 변환 로직
      }
      setConvertedAmount(converted);
    };
    convertShoeSize();
  }, [amount, sizeSystem, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: sizeSystem === "kr" ? "한국 (mm)" : "미국 (US)",
      to: sizeSystem === "kr" ? "미국 (US)" : "한국 (mm)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">신발 사이즈 변환기</Typography>
      <ConverterInput label="사이즈" value={amount} onChange={setAmount} />
      <SelectInput
        label="사이즈 시스템"
        value={sizeSystem}
        onChange={setSizeSystem}
        options={sizes}
      />
      <Typography variant="body1">
        변환된 사이즈: {convertedAmount.toFixed(0)}
      </Typography>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default ShoeSizeConverter;
