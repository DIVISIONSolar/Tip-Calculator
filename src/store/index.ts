import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculator-slice";

const store = configureStore({
  reducer: {
    calculator: calculatorSlice.reducer,
  },
});

export default store;