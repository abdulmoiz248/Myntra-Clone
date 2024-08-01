import {createSlice} from '@reduxjs/toolkit'

export const FetchSlice=createSlice({
    name:'FetchStatus',
    initialState: {
        fetched:false,
        fetching:false
    },
    reducers:{
      addFetched:(state)=>{state.fetched=true;},
      setFetching:(state)=>{state.fetching= !state.fetching;}
    }
});

export const FetchActions=FetchSlice.actions;
