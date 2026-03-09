import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './counter/counterSlice'

const Home = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
           Current count is: {count}
           <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Home