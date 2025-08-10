import { getPosts, getUsers } from '@/lib/data'
import React from 'react'

const ParellelDataFetching = async() => {

    // This component is a placeholder for the parellel data fetching example

    const [ users, posts ] = await Promise.all([
        getUsers(),
        getPosts()
    ])

  return (
    <div className='min-h-screen mt-20 text-center'>
       <h1 className='text-3xl font-bold'> Parellel DataFetching page </h1>

         <h2 className='text-2xl font-bold mt-10'>{users.length}</h2>


         <h2 className='text-2xl font-bold mt-10'>{posts.length}</h2>




    </div>
  )
}

export default ParellelDataFetching