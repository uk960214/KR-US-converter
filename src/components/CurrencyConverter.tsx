import { createConverterStore } from "../store/createConverterStore";
import useFetchExchangeRate from "../hooks/useFetchExchangeRate";
import ConverterContainer from "./ConverterContainer";

const useCurrencyStore = createConverterStore("currency");

function CurrencyConverter() {
  const exchangeRate = useFetchExchangeRate(1400); // 기본값 설정

  const { amount, setAmount, addHistory } = useCurrencyStore(
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
    setAmount(value * exchangeRate);
  };

  const handleSave = () => {
    const date = new Date().toLocaleString();
    addHistory({
      date,
      from: "KRW",
      to: "USD",
      amount,
      result: amount / exchangeRate,
    });
  };

  return (
    <ConverterContainer
      title="통화 변환기"
      amount={amount}
      convertedAmount={amount / exchangeRate}
      onAmountChange={handleAmountChange}
      onConvertedAmountChange={handleConvertedAmountChange}
      adornmentLeft={
        <span role="img" aria-label="KRW">
          🇰🇷 KRW
        </span>
      }
      adornmentRight={
        <span role="img" aria-label="USD">
          🇺🇸 USD
        </span>
      }
      onSave={handleSave}
    />
  );
}

export default CurrencyConverter;
