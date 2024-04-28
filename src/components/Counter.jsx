import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

const Counter = () => {

  // MMMMIIIIMMMPP
  // APDE KOI 'SLICE' NI PERTICULOUR VALUE FINDOUT KARVI CHE TO APDE "useSelector" HOOK no use karvo padshe....useSelector HOOK  a slice mathi data ne access/slice mathi data ne fetch karva use thay che 
  // apde ahiya count ni ne "value" kidhu hatu mate ahiya '.value' lakhelu che  
  const count = useSelector((state) => state.counter.value );
  // MMMIIIMMMPP
  // APDE ACTION CREATER NI ANDER THI(CounterSlice.actions) increment, decrement ni functionalities fetch kareli hati......to aa functionalites ne call k v rite karishu? to tena mate pan aek HOOK che  "useDispatch" HOOK j apdi functionalities che j apde fetch kareli che tene call kari ne a functionalities nu implementation kare che 
    const dispatch = useDispatch();

  return (
    <div>
      <button
      onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br/>
      <br/>

      <div>{count}</div>

      <br/>
      <br/>

      <button
      onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
