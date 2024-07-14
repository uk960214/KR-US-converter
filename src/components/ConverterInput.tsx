import { TextField, InputAdornment } from "@mui/material";

interface ConverterInputProps {
  value: number;
  onChange: (value: number) => void;
  adornment: React.ReactNode;
  adornmentPosition?: "start" | "end";
}

const ConverterInput: React.FC<ConverterInputProps> = ({
  value,
  onChange,
  adornment,
  adornmentPosition = "start",
}) => {
  return (
    <TextField
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      fullWidth
      margin="normal"
      InputProps={{
        [adornmentPosition === "start" ? "startAdornment" : "endAdornment"]: (
          <InputAdornment position={adornmentPosition}>
            {adornment}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ConverterInput;
