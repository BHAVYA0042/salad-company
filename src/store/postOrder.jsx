import { createSlice } from "@reduxjs/toolkit";

const post_slice=createSlice({
  name:'postOrder',
  initialState:{isDone:false,order_data:[]},
  reducers:{
    toggleisDone(state){
      state.isDone=!state.isDone
    },
    getOrderData(state,action){
      const data=action.payload;
      state.order_data.push(data);
    },
    reset(state){
      state.isDone=false;
      state.order_data=[]
    }
  }
})

export default post_slice;