import { createSlice } from "@reduxjs/toolkit";
import { generateFakeProducts } from "../components/data";

const initialState = {
  products: generateFakeProducts(),
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(CREATE_PRODUCT_THUNK.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(CREATE_PRODUCT_THUNK.rejected, (state, action) => {
        console.error("Failed to create product:", action.payload);
      });
      builder.addCase(FETCH_PRODUCTS_THUNK.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});
