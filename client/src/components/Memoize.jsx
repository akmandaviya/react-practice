import React, { useMemo, useState } from 'react'

const Memoize = () => {
    const [count, setCount] = useState(0)


    // ****expensive operation, calcualtion happening on every re-render****
    // const numsArray = new Array(30_000_000).fill(0).map((_, i) => {
    //     return {
    //         index: i,
    //         isLuckyNum: i === 29_000_000
    //     }

    // })

    // const [nums, setNums] = useState(numsArray)

    // const luckyNum = nums.find(item => item.isLuckyNum === true)  -> 

    const numsArray = useMemo(() => {
        return new Array(30_000_000).fill(0).map((_, i) => {
            return {
                index: i,
                isLuckyNum: i === 29_000_000
            }
        })
    }
        , [])

    const [nums, setNums] = useState(numsArray)

    const luckyNum = useMemo(() => nums.find(item => item.isLuckyNum === true), [nums])

    const incrementCount = () => {
        setCount(prev => prev + 1)
        if(count == 9) { // count === 10 then nums changes so index change
            setNums(
                new Array(10_000_000).fill(0).map((_, i) => {
            return {
                index: i,
                isLuckyNum: i === 9_000_000
            }
        })
            )
        }
    }

    //finding lucky number index from huge array of data
    const data = useMemo(() => {
        return nums.filter( item => item.isLuckyNum === true)
    }, [nums])
    console.log(data)

    return (
        <div>
            <h2>Example for Use Memo</h2>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <span>Lucky num is : {luckyNum.index}</span>
                <button onClick={incrementCount}> + </button>
                <span style={{ marginLeft: "20px" }}>{count}</span>
            </div>
        </div>
    )
}

export default Memoize

// Used to memoize expensive calculations.
// Filtering large lists
// Sorting big arrays
// Expensive calculations