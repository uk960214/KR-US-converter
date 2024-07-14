import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SelectInput from "./SelectInput";
import SaveButton from "./SaveButton";

const units = [
  { value: "kph", label: "킬로미터/시간 (km/h)" },
  { value: "mph", label: "마일/시간 (mph)" },
];

const useSpeedStore = createConverterStore("speed");

function SpeedConverter() {
  const [unit, setUnit] = useState("kph");

  const { amount, setAmount, convertedAmount, setConvertedAmount, addHistory } =
    useSpeedStore(
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
    const convertSpeed = () => {
      const rate = unit === "kph" ? 0.621371 : 1 / 0.621371;
      setConvertedAmount(amount * rate);
    };
    convertSpeed();
  }, [amount, unit, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: unit === "kph" ? "킬로미터/시간 (km/h)" : "마일/시간 (mph)",
      to: unit === "kph" ? "마일/시간 (mph)" : "킬로미터/시간 (km/h)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">속도 변환기</Typography>
      <ConverterInput label="속도" value={amount} onChange={setAmount} />
      <SelectInput
        label="단위"
        value={unit}
        onChange={setUnit}
        options={units}
      />
      <Typography variant="body1">
        변환된 속도: {convertedAmount.toFixed(2)}
      </Typography>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default SpeedConverter;
