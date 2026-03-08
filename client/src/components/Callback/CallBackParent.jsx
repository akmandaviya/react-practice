import React, {useCallback, useState} from 'react'
import CallBackChild from './CallBackChild'

const CallBackParent = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Apple')

    const incrementCount = () => {
        setCount(prev => prev + 1)
    }

    // const changeName = () => { 
    //     return "mango"
    // }

    // here when function passed as prop to child, React memo will not work, as when parent re-renders the fucntion change name will change itself.
    // -> app re-renders
    //     -> function changes
    //         -> props changes
    //             -> so child re-renders as memo will not work

    // ****so now for this issue using use callback to freeze the function****
        // -> now if app re-renders but function will not change

    const changeName = useCallback(() => {
        return "mango" + count
    }, [count]) // empty this then will not change the function

    return (
        <div>
            <h2>use callback</h2>
            <CallBackChild name={name} changeName={changeName}/>
            <button onClick={incrementCount}> + </button>
            <span style={{ marginLeft: "20px" }}>{count}</span>
        </div>
    )
}

export default CallBackParent