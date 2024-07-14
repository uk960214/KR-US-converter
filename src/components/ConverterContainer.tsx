import { Typography, Grid } from "@mui/material";
import ConverterInput from "./ConverterInput";
import SaveButton from "./SaveButton";

interface ConverterContainerProps {
  title: string;
  amount: number;
  convertedAmount: number;
  onAmountChange: (value: number) => void;
  onConvertedAmountChange: (value: number) => void;
  adornmentLeft: React.ReactNode;
  adornmentRight: React.ReactNode;
  onSave: () => void;
}

const ConverterContainer: React.FC<ConverterContainerProps> = ({
  title,
  amount,
  convertedAmount,
  onAmountChange,
  onConvertedAmountChange,
  adornmentLeft,
  adornmentRight,
  onSave,
}) => {
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <ConverterInput
            value={amount}
            onChange={onAmountChange}
            adornment={adornmentLeft}
            adornmentPosition="end"
          />
        </Grid>
        <Grid item xs={2} style={{ textAlign: "center" }}>
          <Typography variant="h6">↔</Typography>
        </Grid>
        <Grid item xs={5}>
          <ConverterInput
            value={convertedAmount}
            onChange={onConvertedAmountChange}
            adornment={adornmentRight}
            adornmentPosition="end"
          />
        </Grid>
      </Grid>
      <SaveButton onClick={onSave} />
    </div>
  );
};

export default ConverterContainer;
