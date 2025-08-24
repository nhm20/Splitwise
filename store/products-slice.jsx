import { createSlice } from "@reduxjs/toolkit";
import { generateFakeProducts } from "../components/data";

const initialState = {
  products: generateFakeProducts(),
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
});
