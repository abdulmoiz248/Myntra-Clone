import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ItemActions } from '../store/items';
import { FetchActions } from '../store/Fetch';


export default function Fetching() {
    let dispatch=useDispatch();
    let fetchStatus=useSelector((store)=>store.fetch);

    useEffect(()=>{
        if(fetchStatus.fetched) return;
        dispatch(FetchActions.setFetching())
        const controller=new AbortController();
        const signal=controller.signal;

        fetch("http://localhost:8080/items",{signal}).then(
            (res)=>res.json().then(({items})=>{
                dispatch(ItemActions.addInitialItem(items[0]));
            })
        );
         
        dispatch(FetchActions.addFetched())
        dispatch(FetchActions.setFetching())
        return ()=> controller.abort();

    },[fetchStatus]);

  return (
    <div>
    
    </div>
  )
}
