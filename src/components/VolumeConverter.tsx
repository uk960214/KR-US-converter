import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SelectInput from "./SelectInput";
import SaveButton from "./SaveButton";

const units = [
  { value: "liters", label: "리터 (L)" },
  { value: "gallons", label: "갤런 (gal)" },
];

const useVolumeStore = createConverterStore("volume");

function VolumeConverter() {
  const [unit, setUnit] = useState("liters");

  const { amount, setAmount, convertedAmount, setConvertedAmount, addHistory } =
    useVolumeStore(
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
    const convertVolume = () => {
      const rate = unit === "liters" ? 0.264172 : 1 / 0.264172;
      setConvertedAmount(amount * rate);
    };
    convertVolume();
  }, [amount, unit, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: unit === "liters" ? "리터 (L)" : "갤런 (gal)",
      to: unit === "liters" ? "갤런 (gal)" : "리터 (L)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">부피 변환기</Typography>
      <ConverterInput label="부피" value={amount} onChange={setAmount} />
      <SelectInput
        label="단위"
        value={unit}
        onChange={setUnit}
        options={units}
      />
      <Typography variant="body1">
        변환된 부피: {convertedAmount.toFixed(2)}
      </Typography>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default VolumeConverter;
