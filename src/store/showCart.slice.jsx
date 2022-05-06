import { createSlice } from "@reduxjs/toolkit"
const Cart_slice=createSlice({
  name:'Cart',
  initialState:{
    showCart:false,
    showModal:false,
    showRazor:false
  },
  reducers:{
    toggleCart(state){
      state.showCart=!state.showCart;
      state.showModal=!state.showModal;
    },
    toggleRazor(state,action){
      const money=action.payload;
      state.showRazor=!state.showRazor;
      console.log(money);
    }
  }
})

export default Cart_slice;