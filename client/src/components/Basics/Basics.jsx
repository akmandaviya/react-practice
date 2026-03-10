import React, { useEffect, useState } from 'react'

const Basics = () => {
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    const [users, setUSers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                setUSers(data)
                setLoading(false)
            })
    }, [])

    const addTodo = () => {
        if (!todo.trim()) return

        setTodoList(prev => [
            ...prev, {
                text: todo,
                id: Date.now()
            }
        ])

        setTodo('')
    }

    const removeTodo = (id) => {
        setTodoList(prev => prev.filter(item => item.id !== id))
    }

    //this way also we can show loading, this will show for all UI

    // if(loading) { 
    //     return <p>Loading....</p>
    // }

    return (
        <div>
            <div>
                <h2>To do List</h2>

                <input
                    type='text'
                    placeholder='Type something'
                    value={todo}
                    onChange={(e) => { setTodo(e.target.value) }} />
                <button onClick={addTodo}>+</button>

                <ul style={{ listStyleType: 'none' }}>
                    {todoList.map(item => (
                        <li key={item.id}>
                            {item.text}
                            <button onClick={() => removeTodo(item.id)}>-</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Api data in list</h2>
                {loading ? (
                    <p> Loading...</p>
                ) : (
                    <ol>
                        {users.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ol>
                )}

            </div>

            <div>
                <h2> api data in table </h2>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>

                        </thead>
                        <tbody>
                            {users.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                )}

            </div>
        </div>
    )
}

export default Basics