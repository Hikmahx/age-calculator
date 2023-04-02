import { createSlice } from "@reduxjs/toolkit";

interface ageState {
  showAside: boolean;
  text: string;
}

const initialState: ageState = {
  showAside: false,
  text: "",
};

const ageSlice = createSlice({
  name: "age",
  initialState,
  reducers: {
    asideToggle: (state, { payload }) => {
      state.showAside = payload;
    },
    setText: (state, { payload }) => {
      state.text = payload;
    },
  },
});

export const { asideToggle, setText } = ageSlice.actions;
export default ageSlice.reducer;