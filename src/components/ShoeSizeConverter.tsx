import { createConverterStore } from "../store/createConverterStore";
import ConverterContainer from "./ConverterContainer";

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
    <ConverterContainer
      title="신발 크기 변환기"
      amount={amount}
      convertedAmount={amount - 18}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft="KR"
      adornmentRight="US"
      onSave={handleSave}
    />
  );
}

export default ShoeSizeConverter;
