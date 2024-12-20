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
         const existingItem = state.items.find(item => item.id === action.payload.id);

         if (existingItem) {
            existingItem.quantity += 1;
         } else {
            state.items.push({
               product: action.payload,
               quantity: 1,
            })

         }
         state.totalItems += 1;
      },
      removeFromCart: (state, action) => {
         const existingItem = state.items.find(item => item.product.id === action.payload.id);

         if (existingItem) {
            state.items = state.items.filter(item => item.product.id !== action.payload.id);
            state.totalItems -= existingItem.quantity;
         }
      },
      updateQuantity: (state, action) => {
         const { id, quantity } = action.payload;
         const item = state.items.find(item => item.product.id === id);

         if (item) {
            const difference = quantity - item.quantity;
            item.quantity = quantity;
            state.totalItems += difference;
         }

         if (quantity === 0) {
            state.items = state.items.filter(item => item.product.id !== id);
         }
      }
   }
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) => state.cart.totalItems;
export default cartSlice.reducer;