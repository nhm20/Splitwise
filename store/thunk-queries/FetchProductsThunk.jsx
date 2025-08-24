import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_PRODUCTS_THUNK = createAsyncThunk("FETCH_PRODUCT_THUNK",
    async(_,thunkAPI) => {
        try{
            const products = await fetchProducts();
            return thunkAPI.fulfillWithValue(products);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);