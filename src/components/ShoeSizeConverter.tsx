import { Typography, Grid } from "@mui/material";
import { createConverterStore } from "../store/createConverterStore";
import ConverterInput from "./ConverterInput";
import SaveButton from "./SaveButton";

const useShoeSizeStore = createConverterStore("shoeSize");

function ShoeSizeConverter() {
  const { amount, setAmount, addHistory } = useShoeSizeStore(
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
    setAmount(value + 18);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({ date, from: "KR", to: "US", amount, result: amount - 18 });
  };

  return (
    <div>
      <Typography variant="h6">신발 크기 변환기</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <ConverterInput
            value={amount}
            onChange={handleAmountChange}
            adornment="KR"
            adornmentPosition="end"
          />
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Typography variant="h6">↔</Typography>
        </Grid>
        <Grid item xs={5}>
          <ConverterInput
            value={amount - 18}
            onChange={handleConvertedAmountChange}
            adornment="US"
            adornmentPosition="end"
          />
        </Grid>
      </Grid>
      <SaveButton onClick={handleSave} />
    </div>
  );
}

export default ShoeSizeConverter;
