import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./items";
import { FetchSlice } from "./Fetch";
import BagSlice from "./BagSlice";

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetch:FetchSlice.reducer,
    bag: BagSlice.reducer
  },
});
