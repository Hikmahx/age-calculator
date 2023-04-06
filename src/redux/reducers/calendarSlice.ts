import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
// import locale from "dayjs/locale/en";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    currentDate: dayjs(),
    pickedDate: dayjs(),
    pickedDay: parseInt(dayjs().format("DD")),
    pickedMonth: dayjs().format("MMMM"),
    pickedYear: parseInt(dayjs().format("YYYY")),
    dateInput: "",
    calendarDisplay: false,
    calendarModalDisplay: false,
    dataType: "all-data",
    dateRange: [],
    minRangeNum: 0,
    maxRangeNum: 0,
    rangeInput: "",
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
    setCalendarDisplay: (state, { payload }) => {
      state.calendarDisplay = payload;
    },
    inputDate: (state, { payload }) => {
      state.pickedDate = payload.date;
      state.pickedDay = payload.day;
      state.pickedMonth = payload.month;
      state.pickedYear = payload.year;
    },
    calendarModal: (state, { payload }) => {
      state.calendarModalDisplay = payload;
    },
    setDataType: (state, { payload }) => {
      state.dataType = payload;
    },
  },
});

export const {
  nextMonth,
  prevMonth,
  chooseDate,
  setDateInput,
  inputDate,
  setCalendarDisplay,
  calendarModal,
  setDataType,
  prevDay,
  nextDay,
} = calendarSlice.actions;
export default calendarSlice.reducer;
