import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import useFetchExchangeRate from "../hooks/useFetchExchangeRate";
import ConverterInput from "./ConverterInput";
import SelectInput from "./SelectInput";
import SaveButton from "./SaveButton";

const currencies = [
  { value: "USD", label: "달러 (USD)" },
  { value: "KRW", label: "원화 (KRW)" },
];

const useCurrencyStore = createConverterStore("currency");

function CurrencyConverter() {
  const [currency, setCurrency] = useState("USD");
  const exchangeRate = useFetchExchangeRate(1400); // 기본값 설정

  const { amount, setAmount, convertedAmount, setConvertedAmount, addHistory } =
    useCurrencyStore(
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
    const convertCurrency = () => {
      const rate = currency === "USD" ? exchangeRate : 1 / exchangeRate;
      setConvertedAmount(amount * rate);
    };
    convertCurrency();
  }, [amount, currency, exchangeRate, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: currency === "USD" ? "달러 (USD)" : "원화 (KRW)",
      to: currency === "USD" ? "원화 (KRW)" : "달러 (USD)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">통화 변환기</Typography>
      <ConverterInput label="금액" value={amount} onChange={setAmount} />
      <SelectInput
        label="통화"
        value={currency}
        onChange={setCurrency}
        options={currencies}
      />
      <Typography variant="body1">
        변환된 금액: {convertedAmount.toFixed(2)}
      </Typography>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default CurrencyConverter;
