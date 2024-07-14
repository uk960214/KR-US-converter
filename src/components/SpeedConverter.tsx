import { Typography, Grid } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SaveButton from "./SaveButton";

const useSpeedStore = createConverterStore("speed");

function SpeedConverter() {
  const { amount, setAmount, addHistory } = useSpeedStore(
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
    setAmount(value / 0.621371);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "km/h",
      to: "mph",
      amount,
      result: amount * 0.621371,
    });
  };

  return (
    <div>
      <Typography variant="h6">속도 변환기</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <ConverterInput
            value={amount}
            onChange={handleAmountChange}
            adornment="km/h"
            adornmentPosition="end"
          />
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Typography variant="h6">↔</Typography>
        </Grid>
        <Grid item xs={5}>
          <ConverterInput
            value={amount * 0.621371}
            onChange={handleConvertedAmountChange}
            adornment="mph"
            adornmentPosition="end"
          />
        </Grid>
      </Grid>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default SpeedConverter;
