import { useState, useEffect } from "react";
import { fetchExchangeRate } from "../services/exchangeRateService";

const useFetchExchangeRate = (defaultRate: number) => {
  const [exchangeRate, setExchangeRate] = useState(defaultRate);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const rate = await fetchExchangeRate();
        setExchangeRate(rate);
      } catch (error) {
        console.error("환율 정보를 가져오는데 실패했습니다:", error);
      }
    };

    fetchRate();
  }, []);

  return exchangeRate;
};

export default useFetchExchangeRate;
