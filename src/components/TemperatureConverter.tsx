import { createConverterStore } from "../store/createConverterStore";
import ConverterContainer from "./ConverterContainer";

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
    <ConverterContainer
      title="온도 변환기"
      amount={amount}
      convertedAmount={(amount * 9) / 5 + 32}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft="°C"
      adornmentRight="°F"
      onSave={handleSave}
    />
  );
}

export default TemperatureConverter;
