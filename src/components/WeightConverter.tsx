import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SelectInput from "./SelectInput";
import SaveButton from "./SaveButton";

const units = [
  { value: "kilograms", label: "킬로그램 (kg)" },
  { value: "pounds", label: "파운드 (lb)" },
];

const useWeightStore = createConverterStore("weight");

function WeightConverter() {
  const [unit, setUnit] = useState("kilograms");

  const { amount, setAmount, convertedAmount, setConvertedAmount, addHistory } =
    useWeightStore(
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
    const convertWeight = () => {
      const rate = unit === "kilograms" ? 2.20462 : 1 / 2.20462;
      setConvertedAmount(amount * rate);
    };
    convertWeight();
  }, [amount, unit, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: unit === "kilograms" ? "킬로그램 (kg)" : "파운드 (lb)",
      to: unit === "kilograms" ? "파운드 (lb)" : "킬로그램 (kg)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">무게 변환기</Typography>
      <ConverterInput label="무게" value={amount} onChange={setAmount} />
      <SelectInput
        label="단위"
        value={unit}
        onChange={setUnit}
        options={units}
      />
      <Typography variant="body1">
        변환된 무게: {convertedAmount.toFixed(2)}
      </Typography>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default WeightConverter;
