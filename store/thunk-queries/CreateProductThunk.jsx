import { createAsyncThunk } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";
import { insertProduct } from "../../db/database";

const CREATE_PRODUCT_THUNK = createAsyncThunk(
  "CREATE_PRODUCT_THUNK",
  async (data, thunkAPI) => {
    try {
      const { id, name, image, price, description, category, lat, lng } = data;
        const result = FileSystem.documentDirectory + image.split("/").pop();

        await FileSystem.moveAsync({
          from: image,
          to: result,
        });

      const sqlResult = await insertProduct({
        id,
        name,
        image: result,
        price,
        description,
        category,
        lat,
        lng,
      });
      return thunkAPI.fulfillWithValue(sqlResult);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export default CREATE_PRODUCT_THUNK;
