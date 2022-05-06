import {createSlice} from "@reduxjs/toolkit";

const order_slice=createSlice({
  name:'cart',
  initialState:{
    items:[],
    totalQuantity:0,
    totalBill:0
  },
  reducers:{
    addItemToCart(state,action){
      const newItem=action.payload;
      const existingItem=state.items.find(item=>item.id===newItem.id);
      state.totalQuantity++;
      state.totalBill+=newItem.price;
      if(!existingItem){
        state.items.push({
          id:newItem.id,
          name:newItem.title,
          price:newItem.price,
          quantity:1,
          totalPrice:newItem.price,
        })
      }else{
        existingItem.quantity++;
        existingItem.totalPrice+=newItem.price;
      }
    },
    removeItemFromCart(state,action){
      const new_id =action.payload;
      const existingItem=state.items.find(item=> item.id=== new_id);
      state.totalQuantity--;
      state.totalBill-=existingItem.price;
      if(existingItem.quantity===1){
        state.items=state.items.filter(item=>item.id!==new_id);
      }else{
        existingItem.quantity--;
        existingItem.totalPrice-=existingItem.price
      }

    },
    emptyCart(state){
      state.items=[];
      state.totalQuantity=0;
      state.totalBill=0;
    }
  }
})

export default order_slice;