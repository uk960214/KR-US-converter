import { createConverterStore } from "../store/createConverterStore";
import ConverterContainer from "./ConverterContainer";

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
    <ConverterContainer
      title="무게 변환기"
      amount={amount}
      convertedAmount={amount * 2.20462}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft="kg"
      adornmentRight="lb"
      onSave={handleSave}
    />
  );
}

export default WeightConverter;
