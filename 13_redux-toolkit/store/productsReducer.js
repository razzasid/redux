import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "./productsList";

const productsSlice = createSlice({
  name: "product",
  initialState: productsList,
  reducers: {},
});

export default productsSlice.reducer;
