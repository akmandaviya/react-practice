import React, { useReducer } from 'react'

const ReducerParent = () => {
    const initialData = {
        name:'',
        password:'',
        email:'',
        age:'',
        city:'',
        state:'',
        state:'',
        country: '' 
    }

    const reduceFunc = (data, action) => { 
       return { 
         ...data, [action.type]: action.val
       }
    }

    const [state, dispatch] = useReducer(reduceFunc,initialData)

  return (
    <div>
        <h2>Use Reducer hook</h2>
        <div>
            <input type='text' placeholder='Enter name' style={{marginBottom: '10px'}} onChange={(e) => dispatch({val: e.target.value, type: 'name'})}/><br/>
            <input type='text' placeholder='Enter password' style={{marginBottom: '10px'}} onChange={(e) => dispatch({val: e.target.value, type: 'password'})}/><br/>
            <input type='text' placeholder='Enter email' style={{marginBottom: '10px'}} onChange={(e) => dispatch({val: e.target.value, type: 'email'})}/><br/>
            <input type='text' placeholder='Enter age' style={{marginBottom: '10px'}} onChange={(e) => dispatch({val: e.target.value, type: 'age'})}/><br/>
            <input type='text' placeholder='Enter city' style={{marginBottom: '10px'}} onChange={(e) => dispatch({val: e.target.value, type: 'city'})}/><br/>
            <input type='text' placeholder='Enter state' style={{marginBottom: '10px'}} onChange={(e) => dispatch({val: e.target.value, type: 'state'})}/><br/>
            <input type='text' placeholder='Enter country' style={{marginBottom: '10px'}} onChange={(e) => dispatch({val: e.target.value, type: 'country'})}/><br/>
            <button onClick={() => console.log(state)}>Submit</button>
        </div>
        <div>
            <ul>
                <li>Name:{state.name}</li>
                <li>Password:{state.password}</li>
                <li>Email:{state.email}</li>
                <li>City:{state.city}</li>
                <li>State:{state.state}</li>
                <li>Country:{state.country}</li>
            </ul>
        </div>
    </div>
  )
}

export default ReducerParent


// Use reducer
    // -> mange complex state logic in the component. Similar to Redux
    // -> As alternative to use state, when state transition involves multiple state values, or one state depends on previous state.
    // -> complex forms, multi-step flows, large state logic