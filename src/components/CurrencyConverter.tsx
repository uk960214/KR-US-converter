import { useState, useEffect } from "react";
import { TextField, MenuItem, Typography, Button } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import { fetchExchangeRate } from "../services/exchangeRateService";

const currencies = [
  { value: "USD", label: "달러 (USD)" },
  { value: "KRW", label: "원화 (KRW)" },
];

const useCurrencyStore = createConverterStore("currency");

function CurrencyConverter() {
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1400); // 기본값 설정
  const amount = useCurrencyStore((state) => state.amount);
  const setAmount = useCurrencyStore((state) => state.setAmount);
  const convertedAmount = useCurrencyStore((state) => state.convertedAmount);
  const setConvertedAmount = useCurrencyStore(
    (state) => state.setConvertedAmount
  );
  const addHistory = useCurrencyStore((state) => state.addHistory);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const rate = await fetchExchangeRate();
        setExchangeRate(rate);
      } catch (error) {
        console.error("환율 정보를 가져오는데 실패했습니다:", error);
      }
    };

    fetchRate();
  }, []);

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
      <TextField
        label="금액"
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="통화"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        fullWidth
        margin="normal"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="body1">
        변환된 금액: {convertedAmount.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSave}>
        기록 저장
      </Button>
    </div>
  );
}

export default CurrencyConverter;
