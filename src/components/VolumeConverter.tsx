import { createConverterStore } from "../store/createConverterStore";
import ConverterContainer from "./ConverterContainer";

const useVolumeStore = createConverterStore("volume");

function VolumeConverter() {
  const { amount, setAmount, addHistory } = useVolumeStore(
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
    setAmount(value / 0.264172);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "L",
      to: "gal",
      amount,
      result: amount * 0.264172,
    });
  };

  return (
    <ConverterContainer
      title="부피 변환기"
      amount={amount}
      convertedAmount={amount * 0.264172}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft="L"
      adornmentRight="gal"
      onSave={handleSave}
    />
  );
}

export default VolumeConverter;
