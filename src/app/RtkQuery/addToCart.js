import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCard: [],
};
export const addToCart = createSlice({
  name: "commomSlice",
  initialState,
  reducers: {
    wishList: (state, action) => {
      const itemIndex = state.addToCard.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.addToCard[itemIndex].cardQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        state.addToCard.push(tempProduct);
      }
    },
  },
});

export const { wishList } = addToCart.actions;
export default addToCart.reducer;
