import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SelectInput from "./SelectInput";
import SaveButton from "./SaveButton";

const units = [
  { value: "celsius", label: "섭씨 (°C)" },
  { value: "fahrenheit", label: "화씨 (°F)" },
];

const useTemperatureStore = createConverterStore("temperature");

function TemperatureConverter() {
  const [unit, setUnit] = useState("celsius");

  const { amount, setAmount, convertedAmount, setConvertedAmount, addHistory } =
    useTemperatureStore(
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
    const convertTemperature = () => {
      let converted;
      if (unit === "celsius") {
        converted = (amount * 9) / 5 + 32; // 섭씨에서 화씨로 변환
      } else {
        converted = ((amount - 32) * 5) / 9; // 화씨에서 섭씨로 변환
      }
      setConvertedAmount(converted);
    };
    convertTemperature();
  }, [amount, unit, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: unit === "celsius" ? "섭씨 (°C)" : "화씨 (°F)",
      to: unit === "celsius" ? "화씨 (°F)" : "섭씨 (°C)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">온도 변환기</Typography>
      <ConverterInput label="온도" value={amount} onChange={setAmount} />
      <SelectInput
        label="단위"
        value={unit}
        onChange={setUnit}
        options={units}
      />
      <Typography variant="body1">
        변환된 온도: {convertedAmount.toFixed(2)}
      </Typography>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default TemperatureConverter;
