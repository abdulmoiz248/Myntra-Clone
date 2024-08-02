import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { ItemActions } from '../store/items';
import { FetchActions } from '../store/Fetch';


export default function Fetching() {
    let dispatch=useDispatch();
    let fetchStatus=useSelector((store)=>store.fetch);

    useEffect(()=>{
        if(fetchStatus.fetched) return;
        console.log('Fetching'+fetchStatus.fetched);
        dispatch(FetchActions.setFetching(true))
        const controller=new AbortController();
        const signal=controller.signal;

        fetch("http://localhost:8080/items",{signal}).then(
            (res)=>res.json().then(({items})=>{
                console.log(items[0]);
             dispatch(ItemActions.addInitialItem(items[0]));
            dispatch(FetchActions.setFetching(false))
            console.log('inside fetch'+fetchStatus.fetched);
            })
        );
        console.log('Fetched'+fetchStatus.fetched);
       dispatch(FetchActions.addFetched())
        
     //   return ()=> controller.abort();

    },[fetchStatus]);

  return (
    <div>
    
    </div>
  )
}
