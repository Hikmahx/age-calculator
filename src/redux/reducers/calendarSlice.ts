import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
// import locale from "dayjs/locale/en";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    pickedDate: dayjs(),
    pickedDay: parseInt(dayjs().format("DD")),
    pickedMonth: dayjs().format("MMMM"),
    pickedYear: parseInt(dayjs().format("YYYY")),
    dateInput: "",
  },
  reducers: {
    nextMonth: (state) => {
      state.pickedDate = state.pickedDate.add(1, "month");
    },
    prevMonth: (state) => {
      state.pickedDate = state.pickedDate.subtract(1, "month");
    },
    nextDay: (state) => {
      state.pickedDate = state.pickedDate.add(1, "day");
    },
    prevDay: (state) => {
      state.pickedDate = state.pickedDate.subtract(1, "day");
    },
    chooseDate: (state, { payload }) => {
      state.pickedDate = state.pickedDate.set("date", payload);
      state.pickedDay = parseInt(
        state.pickedDate.set("date", payload).format("DD")
      );
      state.pickedMonth = state.pickedDate.set("date", payload).format("MMMM");
      state.pickedYear = parseInt(
        state.pickedDate.set("date", payload).format("YYYY")
      );
    },
    setDateInput: (state, { payload }) => {
      state.dateInput = payload;
      state.pickedDay = parseInt(payload.slice(0, 2));
    },
    inputDate: (state, { payload }) => {
      state.pickedDate = payload.date;
      state.pickedDay = payload.day;
      state.pickedMonth = payload.month;
      state.pickedYear = payload.year;
    },
  },
});

export const {
  nextMonth,
  prevMonth,
  chooseDate,
  setDateInput,
  inputDate,
  prevDay,
  nextDay,
} = calendarSlice.actions;
export default calendarSlice.reducer;
