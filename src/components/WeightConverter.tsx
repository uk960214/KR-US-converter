import { Typography, Grid } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SaveButton from "./SaveButton";

const useWeightStore = createConverterStore("weight");

function WeightConverter() {
  const { amount, setAmount, addHistory } = useWeightStore(
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
    setAmount(value / 2.20462);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "kg",
      to: "lb",
      amount,
      result: amount * 2.20462,
    });
  };

  return (
    <div>
      <Typography variant="h6">무게 변환기</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <ConverterInput
            value={amount}
            onChange={handleAmountChange}
            adornment="kg"
            adornmentPosition="end"
          />
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Typography variant="h6">↔</Typography>
        </Grid>
        <Grid item xs={5}>
          <ConverterInput
            value={amount * 2.20462}
            onChange={handleConvertedAmountChange}
            adornment="lb"
            adornmentPosition="end"
          />
        </Grid>
      </Grid>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default WeightConverter;
