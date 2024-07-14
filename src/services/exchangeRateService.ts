import axios from "axios";

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const CACHE_KEY = "exchangeRateCache";
const CACHE_TIMESTAMP_KEY = "exchangeRateCacheTimestamp";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const fetchExchangeRate = async () => {
  const cachedRate = localStorage.getItem(CACHE_KEY);
  const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

  if (cachedRate && cachedTimestamp) {
    const age = Date.now() - parseInt(cachedTimestamp, 10);
    if (age < CACHE_DURATION) {
      return parseFloat(cachedRate);
    }
  }

  const response = await axios.get(BASE_URL);
  if (response.status !== 200) {
    throw new Error("Failed to fetch exchange rate");
  }
  const rate = response.data.conversion_rates.KRW;

  localStorage.setItem(CACHE_KEY, rate.toString());
  localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());

  return rate;
};
