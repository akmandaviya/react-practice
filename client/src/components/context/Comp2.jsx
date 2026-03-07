import React, {useContext} from 'react'
import { CounterContext } from './context'

const Comp2 = () => {
    const counter = useContext(CounterContext)
  return (
    <div>
        Comp2
        Counter from context api is: {counter.count}
        <button onClick={() => {counter.setCount(counter.count + 1)}}> Click Me  </button>
    </div>
  )
}

export default Comp2