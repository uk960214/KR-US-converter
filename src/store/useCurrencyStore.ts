import create from "zustand";

interface CurrencyState {
  amount: number;
  setAmount: (amount: number) => void;
  convertedAmount: number;
  setConvertedAmount: (convertedAmount: number) => void;
  history: {
    date: string;
    from: string;
    to: string;
    amount: number;
    result: number;
    memo?: string;
  }[];
  addHistory: (record: {
    date: string;
    from: string;
    to: string;
    amount: number;
    result: number;
    memo?: string;
  }) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  amount: 0,
  setAmount: (amount) => set({ amount }),
  convertedAmount: 0,
  setConvertedAmount: (convertedAmount) => set({ convertedAmount }),
  history: JSON.parse(localStorage.getItem("currencyHistory") || "[]"),
  addHistory: (record) =>
    set((state) => {
      const newHistory = [...state.history, record];
      localStorage.setItem("currencyHistory", JSON.stringify(newHistory));
      return { history: newHistory };
    }),
}));
