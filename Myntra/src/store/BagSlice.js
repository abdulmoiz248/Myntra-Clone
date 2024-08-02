import { createSlice } from "@reduxjs/toolkit";


let bagSlice=createSlice(
   {
   name:'Bag',
   initialState: [],
   reducers:{
    addItem: (state,action)=>{
       return [...state,action.payload];
    },
    removeItem: (state,action)=>{
        return state.filter(item=>item.id!==action.payload);
    }

   }
}
);

export default bagSlice.reducer;
export const BagActions=bagSlice.actions;