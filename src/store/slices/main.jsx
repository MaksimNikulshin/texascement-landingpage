//Import components
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


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
  },
});

export const { tabEdit } = main.actions;
export default main.reducer;
