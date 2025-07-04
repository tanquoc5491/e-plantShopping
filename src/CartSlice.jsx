import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    cardState: {},
  },
  reducers: {
    addItem: (state, action) => {
      const isExist = state.items.find(i => i.name == action.payload.name);

      if (!isExist) {
        state.items = [...state.items, {...action.payload, quantity: 1}];
        state.cardState = {...state.cardState, [action.payload.name]: true};
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.name !== action.payload.name);
      state.cardState = {...state.cardState, [action.payload.name]: false};
    },

    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const existItem = state.items.find(i => i.name == name);
      if(existItem) {
          existItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
