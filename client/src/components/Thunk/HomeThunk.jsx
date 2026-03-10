import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPosts} from './PostsDataSlice'

const HomeThunk = () => {
    const dispatch = useDispatch()
    const {posts, loading, error} = useSelector((state) => state.posts)

    if(error) { 
       return <p>Error...`${error}`</p>
    }

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

  return (
    <div>
        <h2>This is to show Redux Thunk</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            { posts.map(item =>(
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
        )}
        
    </div>
  )
}

export default HomeThunk