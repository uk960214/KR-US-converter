import { createConverterStore } from "../store/createConverterStore";
import ConverterContainer from "./ConverterContainer";

const useSpeedStore = createConverterStore("speed", 1);

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
    <ConverterContainer
      title="속도 변환기"
      amount={amount}
      convertedAmount={amount * 0.621371}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft="km/h"
      adornmentRight="mph"
      onSave={handleSave}
    />
  );
}

export default SpeedConverter;
