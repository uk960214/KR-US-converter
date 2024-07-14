import { createConverterStore } from "../store/createConverterStore";
import ConverterContainer from "./ConverterContainer";

const useLengthStore = createConverterStore("length");

function LengthConverter() {
  const { amount, setAmount, addHistory } = useLengthStore(
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
    setAmount(value / 39.3701);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "Meters",
      to: "Inches",
      amount,
      result: amount * 39.3701,
    });
  };

  return (
    <ConverterContainer
      title="길이 변환기"
      amount={amount}
      convertedAmount={amount * 39.3701}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft="m"
      adornmentRight="in"
      onSave={handleSave}
    />
  );
}

export default LengthConverter;
