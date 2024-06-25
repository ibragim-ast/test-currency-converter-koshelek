import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: { usd: "1", eur: (1 / 1.07).toFixed(2) },
  reducers: {
    setUSD: (state, action) => {
      state.usd = action.payload;
      state.eur = (action.payload / 1.07).toFixed(2);
    },
    setEUR: (state, action) => {
      state.eur = action.payload;
      state.usd = (action.payload * 1.07).toFixed(2);
    },
  },
});

export const { setUSD, setEUR } = currencySlice.actions;
