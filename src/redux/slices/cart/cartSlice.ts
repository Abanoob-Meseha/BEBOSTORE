import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types";

const initialState = {
  cartIsOpen: false,
  totalNum: 200,
  totalPrice: 0,
  products: [] as Product[],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.cartIsOpen = true;
    },
    closeCart: (state) => {
      state.cartIsOpen = false;
    },
    toggleCart: (state) => {
      state.cartIsOpen = !state.cartIsOpen;
    },
    addToCart: (state, { payload }) => {
      // payload --> product
      state.products.push(payload.product);
    },
    removeFromCart: (state, { payload }) => {
      // payload is id
      state.products = [
        ...state.products.filter((product, index) => index !== payload.id),
      ];
    },
    increaseProductCount: (state, { payload }) => {
      // payload is id
      state.products.filter((product) => {
        if (product.id == payload.id) {
          if (product.count >= product.stock) {
            product.count = product.stock;
          } else {
            product.count++;
          }
        }
      });
    },
    decreaseProductCount: (state, { payload }) => {
      // payload is id
      state.products.filter((product) => {
        if (product.id == payload.id) {
          if (product.count == 1) {
            product.count = 1;
          } else {
            product.count--;
          }
        }
      });
    },
    calculateTotalPrice: (state) => {
      let total: number = 0;
      state.products.map((product) => {
        total += product.count * product.price;
      });
      state.totalPrice = total;
    },
  },
});

export default cartSlice.reducer;
export const {
  openCart,
  closeCart,
  toggleCart,
  removeFromCart,
  addToCart,
  calculateTotalPrice,
  decreaseProductCount,
  increaseProductCount,
} = cartSlice.actions;
