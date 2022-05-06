import order_slice from "./order_slice";
import {configureStore} from "@reduxjs/toolkit";
import Cart_slice from "./showCart.slice";
import post_slice from "./postOrder";

export const order_actions=order_slice.actions;
export const cart_actions=Cart_slice.actions;
export const post_actions=post_slice.actions;
export const store=configureStore({
  reducer:{
    ordering:order_slice.reducer,
    toggle:Cart_slice.reducer,
    posted:post_slice.reducer
  }
})