import {createSlice} from '@reduxjs/toolkit'

export const FetchSlice=createSlice({
    name:'FetchStatus',
    initialState: {
        fetched:false,
        fetching:false
    },
    reducers:{
      addFetched:(state)=>{
        state.fetched=true;
      },
      setFetching:(state,action)=>{state.fetching= action.payload;}
    }
});

export const FetchActions=FetchSlice.actions;
