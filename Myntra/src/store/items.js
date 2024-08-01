import {createSlice} from '@reduxjs/toolkit'

export const itemSlice=createSlice({
    name:'item',
    initialState: [],
    reducers:{
        addInitialItem: (store,action)=>{
            console.log(store);
            console.log(action);
         return [action.payload];   
        }
    }
});

export const ItemActions=itemSlice.actions;
