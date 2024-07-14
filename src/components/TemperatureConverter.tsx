import { Typography, Grid } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SaveButton from "./SaveButton";

const useTemperatureStore = createConverterStore("temperature");

function TemperatureConverter() {
  const { amount, setAmount, addHistory } = useTemperatureStore(
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
    setAmount(((value - 32) * 5) / 9);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "°C",
      to: "°F",
      amount,
      result: (amount * 9) / 5 + 32,
    });
  };

  return (
    <div>
      <Typography variant="h6">온도 변환기</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <ConverterInput
            value={amount}
            onChange={handleAmountChange}
            adornment="°C"
            adornmentPosition="end"
          />
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Typography variant="h6">↔</Typography>
        </Grid>
        <Grid item xs={5}>
          <ConverterInput
            value={(amount * 9) / 5 + 32}
            onChange={handleConvertedAmountChange}
            adornment="°F"
            adornmentPosition="end"
          />
        </Grid>
      </Grid>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default TemperatureConverter;
