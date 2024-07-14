import { createConverterStore } from "../store/createConverterStore";
import ConverterContainer from "./ConverterContainer";

const useShoeSizeStore = createConverterStore("shoeSize", 240);

// 한국(mm) -> 미국(US) 변환표
const krToUs = {
  230: 5,
  235: 5.5,
  240: 6,
  245: 6.5,
  250: 7,
  255: 7.5,
  260: 8,
  265: 8.5,
  270: 9,
  275: 9.5,
  280: 10,
  285: 10.5,
  290: 11,
} as const;

// 미국(US) -> 한국(mm) 변환표
const usToKr = {
  5: 230,
  5.5: 235,
  6: 240,
  6.5: 245,
  7: 250,
  7.5: 255,
  8: 260,
  8.5: 265,
  9: 270,
  9.5: 275,
  10: 280,
  10.5: 285,
  11: 290,
} as const;

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
    const krSize = Object.entries(usToKr).find(([us]) => Number(us) === value);
    if (krSize) {
      setAmount(Number(krSize[1]));
    }
  };

  const handleSave = () => {
    const usSize = krToUs[amount as keyof typeof krToUs] || "N/A";
    const date = new Date().toLocaleString();
    addHistory({ date, from: "KR", to: "US", amount, result: usSize });
  };

  const convertedAmount = krToUs[amount as keyof typeof krToUs] || "N/A";

  return (
    <ConverterContainer
      title="신발 크기 변환기"
      amount={amount}
      convertedAmount={convertedAmount}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft="KR"
      adornmentRight="US"
      onSave={handleSave}
    />
  );
}

export default ShoeSizeConverter;
