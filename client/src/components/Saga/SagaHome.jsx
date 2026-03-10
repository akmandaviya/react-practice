import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsRequest } from './PostsSlice'

const SagaHome = () => {

  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector(state => state.postData)

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SagaHome