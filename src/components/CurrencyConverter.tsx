import { Typography, Grid } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import useFetchExchangeRate from "../hooks/useFetchExchangeRate";
import ConverterInput from "./ConverterInput";
import SaveButton from "./SaveButton";

const useCurrencyStore = createConverterStore("currency");

function CurrencyConverter() {
  const exchangeRate = useFetchExchangeRate(1400); // 기본값 설정

  const { amount, setAmount, addHistory } = useCurrencyStore(
    ({ amount, setAmount, addHistory }) => ({
      amount,
      setAmount,
      addHistory,
    })
  );

  const handleAmountChange = (value: number) => {
    setAmount(value);
  };

  const handleConvertedAmountChange = (value: number) => {
    setAmount(value * exchangeRate);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "KRW",
      to: "USD",
      amount,
      result: amount / exchangeRate,
    });
  };

  return (
    <div>
      <Typography variant="h6">통화 변환기</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <ConverterInput
            value={amount}
            onChange={handleAmountChange}
            adornment={
              <span role="img" aria-label="KRW">
                🇰🇷 KRW
              </span>
            }
            adornmentPosition="end"
          />
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Typography variant="h6">↔</Typography>
        </Grid>
        <Grid item xs={5}>
          <ConverterInput
            value={amount / exchangeRate}
            onChange={handleConvertedAmountChange}
            adornment={
              <span role="img" aria-label="USD">
                🇺🇸 USD
              </span>
            }
            adornmentPosition="end"
          />
        </Grid>
      </Grid>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default CurrencyConverter;
