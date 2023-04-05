import { createSlice } from "@reduxjs/toolkit";

interface ageState {
  day: number | string;
  month: number | string;
  year: number | string;
  currentDay: number;
  currentMonth: number;
  currentYear: number;
  // dayNumbers: number;
  input: { day: string; month: string; year: string };
}

const initialState: ageState = {
  day: "",
  month: "",
  year: "",
  currentDay: new Date().getDate(),
  currentMonth: new Date().getMonth() + 1,
  currentYear: new Date().getFullYear(),
  // dayNumbers: 0,
  input: {
    day: "",
    month: "",
    year: "",
  },
};

const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {
    setInput: (state, { payload }) => {
      state.day = payload.day;
      state.month = payload.month;
      state.year = payload.year;
      state.input = payload;
    },
    getDateInput: (state, { payload }) => {
      const date = new Date(payload);
      state.day = date.getDate();
      state.month = date.getMonth() + 1;
      state.year = date.getFullYear();

      // state.dayNumbers = new Date(
      //   state.year !== 0 ? state.year : state.currentYear,
      //   state.month !== 0 ? state.month : state.currentMonth,
      //   0
      // ).getDateInput();
    },
  },
});

export const { getDateInput, setInput } = ageSlice.actions;
export default ageSlice.reducer;
