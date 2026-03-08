import React, { memo } from 'react'

const CallBackChild = ({name}) => {
  console.log('child is rendered')
  return (
    <div>
        <h2>My name is {name}</h2>

    </div>
  )
}

export default memo(CallBackChild)

// React memo
   // ->React.memo is a higher-order component (HOC) used for performance optimization. 
   //  It wraps a functional component to prevent unnecessary re-renders when its props have not changed, by memoizing (caching) the last rendered result.
   // -> When a component is wrapped in React.memo, React performs a shallow comparison of the new props with the previous props.
   //    If the props are the same, React skips the re-rendering of the component and reuses the cached output.
   //    If the props are different, the component re-renders as normal.