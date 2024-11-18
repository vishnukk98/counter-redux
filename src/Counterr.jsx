import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Redux/slice/counterSlice'



function Counterr() {
  const count = useSelector((state)=>state.counterReducer.count)
  const dispatch = useDispatch()
  const [amount,setAmount]=useState("")
console.log(amount);

const handleIncrement=()=>{
  if(amount==""){
    alert("please provide values")
}else{
  dispatch(incrementByAmount(Number(amount)))
   setAmount("")
}
}


  return (
    <>
    <h1 className='text-danger fw-bolder text-center mt-5'>Counter-Application</h1>
      <div className="container border mt-5 p-5 w-50">
        <h1 className='fw-bolder text-center mt-5' style={{fontSize:'50px'}}>{count}</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
            <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-warning'onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className=" d-flex mt-5 ">
        <input type="text" className='form-control' onChange={e=>setAmount(e.target.value)}  placeholder='Enter The Amount To Be Incremented' value={amount||""} />
        <button className='btn btn-primary ms-3'onClick={handleIncrement}>Increment Amount</button>
      </div>
      </div>
      

    </>
  )
}

export default Counterr
