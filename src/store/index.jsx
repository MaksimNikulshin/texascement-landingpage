//Import components
import { configureStore } from "@reduxjs/toolkit";
import main from "./slices/main";

//Initialization store
const store = configureStore({
  reducer: {
    mainReducer: main,
  },
});

export default store;
