import { TextField } from "@mui/material";

interface ConverterInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const ConverterInput: React.FC<ConverterInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <TextField
      label={label}
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      fullWidth
      margin="normal"
    />
  );
};

export default ConverterInput;
