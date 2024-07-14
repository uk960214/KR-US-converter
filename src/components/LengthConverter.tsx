import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SelectInput from "./SelectInput";
import SaveButton from "./SaveButton";

const units = [
  { value: "meters", label: "미터 (m)" },
  { value: "inches", label: "인치 (in)" },
];

const useLengthStore = createConverterStore("length");

function LengthConverter() {
  const [unit, setUnit] = useState("meters");
  const amount = useLengthStore((state) => state.amount);
  const setAmount = useLengthStore((state) => state.setAmount);
  const convertedAmount = useLengthStore((state) => state.convertedAmount);
  const setConvertedAmount = useLengthStore(
    (state) => state.setConvertedAmount
  );
  const addHistory = useLengthStore((state) => state.addHistory);

  useEffect(() => {
    const convertLength = () => {
      const rate = unit === "meters" ? 39.3701 : 1 / 39.3701;
      setConvertedAmount(amount * rate);
    };
    convertLength();
  }, [amount, unit, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: unit === "meters" ? "미터 (m)" : "인치 (in)",
      to: unit === "meters" ? "인치 (in)" : "미터 (m)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">길이 변환기</Typography>
      <ConverterInput label="길이" value={amount} onChange={setAmount} />
      <SelectInput
        label="단위"
        value={unit}
        onChange={setUnit}
        options={units}
      />
      <Typography variant="body1">
        변환된 길이: {convertedAmount.toFixed(2)}
      </Typography>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default LengthConverter;
