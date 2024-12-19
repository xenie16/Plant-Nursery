import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   totalItems: 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         state.items.push(action.payload);
         state.totalItems += 1;
      },
   }
})

export const { addToCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.totalItems;
export default cartSlice.reducer;