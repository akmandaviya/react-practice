import React from 'react'
import {useGetPostsQuery} from '../RTKQuery/services/postsApi'

const GetPostsData = () => {
  const {data: postsData, isLoading, error} = useGetPostsQuery()

  if(isLoading) return <p> Loading... </p>
  if(error) return <p> Error in data load</p>

  return (
    <div>
        <ul>
            {postsData.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default GetPostsData