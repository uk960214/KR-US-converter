import create from "zustand";

interface LengthState {
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

export const useLengthStore = create<LengthState>((set) => ({
  amount: 0,
  setAmount: (amount) => set({ amount }),
  convertedAmount: 0,
  setConvertedAmount: (convertedAmount) => set({ convertedAmount }),
  history: JSON.parse(localStorage.getItem("lengthHistory") || "[]"),
  addHistory: (record) =>
    set((state) => {
      const newHistory = [...state.history, record];
      localStorage.setItem("lengthHistory", JSON.stringify(newHistory));
      return { history: newHistory };
    }),
}));
