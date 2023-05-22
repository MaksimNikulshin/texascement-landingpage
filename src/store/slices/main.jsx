//Import components
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Configuration for requests
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=UTF-8",
};
const url = "http://127.0.0.1/";

//Request for main edit
export const requestMainEdit = createAsyncThunk(
  "mainRequest/mainEdit",
  async (data) => {
    const response = await axios.post(
      url,
      { data: JSON.stringify(data.data) },
      headers
    );
    return response.data;
  }
);

//Create main store
const main = createSlice({
  name: "main",
  initialState: {
    main: false,
    page: null,
    modal: false,
    currentTab: {
      tab: null,
      step: 0,
    },
  },
  reducers: {
    tabEdit(state, action) {
      state.currentTab = action.payload;
    },
    pageEdit(state, action) {
      state.page = action.payload;
    },
    mainEdit(state, action) {
      state.main = action.payload;
    },
    modalEdit(state) {
      state.modal = !state.modal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestMainEdit.fulfilled, (state, { payload }) => {
      state.main = payload;
    });
  },
});

export const { mainEdit, pageEdit, modalEdit, tabEdit } = main.actions;
export default main.reducer;
