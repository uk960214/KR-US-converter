import create from "zustand";

interface ConversionState {
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

export const createConverterStore = (key: string) =>
  create<ConversionState>((set) => ({
    amount: 0,
    setAmount: (amount) => set({ amount }),
    convertedAmount: 0,
    setConvertedAmount: (convertedAmount) => set({ convertedAmount }),
    history: JSON.parse(localStorage.getItem(`${key}History`) || "[]"),
    addHistory: (record) =>
      set((state) => {
        const newHistory = [...state.history, record];
        localStorage.setItem(`${key}History`, JSON.stringify(newHistory));
        return { history: newHistory };
      }),
  }));
