import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { CounterContext } from "./context/context"
import NavBar from "./context/NavBar"

const StateEffectRef = () => {
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(0)
    const [user, setUser] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => { 
        alert(nameRef.current.value)
    }

    // useEffect(() => {
    //    const interval = setInterval(() => { 
    //         setTimer(prev => {
    //             if(prev === 10) { 
    //                 alert('Timer Up !!!')
    //                 return 0
    //             }
    //             return prev + 1
    //         })
    //    },1000)

    //    return () => clearInterval(interval)
    // },[])

    useEffect(() => { 
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUser(data))
    },[])

    // Similar to useEffect but runs before browser paint.
    useLayoutEffect(() => { 
         console.log("Runs before paint");
    }, [ ])

    const decrementCount = () => {
        if (count === 0) {
            return
        }
        setCount(count - 1)
    }

    return (
        <>  
            <h2> Use State, Use Effect and Use Ref</h2>
            <CounterContext.Provider value={{count, setCount}}>
                <NavBar/>
                <div style={{ background: "pink", padding: "10px" }}>
                    <h4>timer</h4>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <button style={{ cursor: "pointer" }} onClick={() => setCount(count + 1)}>Increment</button>
                        Count is: {count}
                        <button style={{ cursor: "pointer" }} onClick={() => decrementCount()}>Decrement</button>
                    </div>
                </div>
            </CounterContext.Provider>

            <div style={{ background: "pink", padding: "10px", marginTop: "20px" }}>
                <h4>Timer</h4>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    Timer Running: {timer}
                    <button style={{ cursor: "pointer" }} onClick={() => setTimer(0)}>Reset</button>
                </div>
            </div>

            <div style={{ background: "pink", padding: "10px", marginTop: "20px" }}>
                <h4>Data from Api through use Effect</h4>
                <ul>
                   {user.map(item => (
                    <li key={item.id}>{item.name}</li>
                   ))}
                </ul>
            </div>

            <div style={{ background: "pink", padding: "10px", marginTop: "20px" }}>
                <h4>Form submit by use ref</h4>
                <input type="text" ref={nameRef}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>

        </>
    )
}

export default StateEffectRef

// UseState:
    // Used to store and update component state.
    // Ex: Counters, Form Inputs, Toggle UI, Modal open/close, Loading state

// UseEffect:
    // Used for side effects in React.
    // Api calls, DOM Updates, timers, event listners

// Use Ref:
    // stores mutable values without re-rendering
    // commonly used in forms to directly access the DOM element (input field) without using state.
    // This is useful for things like focusing an input, reading values, or clearing inputs.
    // Difference between use state and use ref
        // *** controlled components ****.
        // -> when react needs contol on input then use use state
        // -> Ex: Form Validation, live search, button enable/disable, real time UI updates.
        // react always knows the latest values 
        // user type -> onChange -> setstate -> component -> re-renders.

        // *** uncontrolled components
        // -> when we need value just once. usually on submit.
        // -> Ex. simple forms, access DOM elements, focus inputs.