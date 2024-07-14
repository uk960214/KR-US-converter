import { Typography, Grid } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SaveButton from "./SaveButton";

const useVolumeStore = createConverterStore("volume");

function VolumeConverter() {
  const { amount, setAmount, addHistory } = useVolumeStore(
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
    setAmount(value / 0.264172);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "L",
      to: "gal",
      amount,
      result: amount * 0.264172,
    });
  };

  return (
    <div>
      <Typography variant="h6">부피 변환기</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <ConverterInput
            value={amount}
            onChange={handleAmountChange}
            adornment="L"
            adornmentPosition="end"
          />
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Typography variant="h6">↔</Typography>
        </Grid>
        <Grid item xs={5}>
          <ConverterInput
            value={amount * 0.264172}
            onChange={handleConvertedAmountChange}
            adornment="gal"
            adornmentPosition="end"
          />
        </Grid>
      </Grid>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default VolumeConverter;
