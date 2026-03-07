import React, { useContext } from 'react'
import Comp2 from './Comp2'
import { CounterContext } from './context'

const Comp1 = () => {
    const counter = useContext(CounterContext)
  return (
    <div>
        Comp1
        Counter from context api: {counter.count}
        <Comp2/>
    </div>
  )
}

export default Comp1