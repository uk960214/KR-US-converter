import { useState, useEffect } from "react";
import { TextField, MenuItem, Typography, Button } from "@mui/material";
import { useLengthStore } from "../store/useLengthStore";

const units = [
  { value: "meters", label: "미터 (m)" },
  { value: "inches", label: "인치 (in)" },
];

function LengthConverter() {
  const [unit, setUnit] = useState("meters");
  const amount = useLengthStore((state) => state.amount);
  const setAmount = useLengthStore((state) => state.setAmount);
  const convertedAmount = useLengthStore((state) => state.convertedAmount);
  const setConvertedAmount = useLengthStore(
    (state) => state.setConvertedAmount
  );
  const addHistory = useLengthStore((state) => state.addHistory);

  useEffect(() => {
    const convertLength = () => {
      const rate = unit === "meters" ? 39.3701 : 1 / 39.3701;
      setConvertedAmount(amount * rate);
    };
    convertLength();
  }, [amount, unit, setConvertedAmount]);

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: unit === "meters" ? "미터 (m)" : "인치 (in)",
      to: unit === "meters" ? "인치 (in)" : "미터 (m)",
      amount,
      result: convertedAmount,
    });
  };

  return (
    <div>
      <Typography variant="h6">길이 변환기</Typography>
      <TextField
        label="길이"
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="단위"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        fullWidth
        margin="normal"
      >
        {units.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="body1">
        변환된 길이: {convertedAmount.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleSave}>
        기록 저장
      </Button>
    </div>
  );
}

export default LengthConverter;
