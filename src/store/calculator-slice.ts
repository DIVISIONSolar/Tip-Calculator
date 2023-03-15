import { createSlice } from "@reduxjs/toolkit";

//initial state
const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    inputBill: 0,
    selectTip: 0,
    inputNumberPeople: 0,
    tipAmount: 0,
    total: 0,
  },
  //reducers are basically set operations/functions we perform to thr initial state by doing some actions
  reducers: {
    //this is a reducer function which will change the input bill value
    changeInputBill(state, action) {
      state.inputBill = action.payload;
    },
    //this is a reducer function which will change the input people value
    changeInputPeople(state, action) {
      state.inputNumberPeople = action.payload;
    },
    //this is a reducer function which will change the selected tip percentage value
    changeSelectedTip(state, action) {
      state.selectTip = action.payload;
    },
    //this is a reducer function which will return the calculated tip according to number of people
    calculateTipAmount(state, action) {
      if (state.inputNumberPeople === 0 || state.selectTip === 0) {
        state.tipAmount = 0;
        return;
      }
      state.tipAmount = action.payload;
    },

    //this is a reducer function which will return the calculated amount accordinf to the number of people
    calculateTotal(state, action) {
      if (state.inputNumberPeople === 0 || state.selectTip === 0) {
        state.total = 0;
        return;
      }
      state.total = action.payload;
    },
    //this reducer will reset all the ovrided states and make them null/initial
    resetCalculator(state) {
      state.inputBill = 0;
      state.selectTip = 0;
      state.inputNumberPeople = 0;
      state.tipAmount = 0;
      state.total = 0;
    },
  },
});
//exporting all the reducers here, we can also do one by one 
export const calculatorActions = calculatorSlice.actions;
//exporting this file to the store so we can use it in our app through the store file
export default calculatorSlice;
