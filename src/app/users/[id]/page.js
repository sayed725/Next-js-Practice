import { getUser, getUserPosts } from '@/lib/data';
import React from 'react'

const UserDetails = async( {params} ) => {

    const { id } = await params;


    // 1.fetch user details based on the id 

    const user = await getUser(id);

    // console.log(user)




    // 2.fetch user post by user id

    const posts = await getUserPosts( user.id);


  return (
    <div className='min-h-screen mt-20 text-center'>
       <h1>User Details</h1>

        <h1 className='text-3xl font-bold mt-10 text-center'>{user.name}</h1>

        <p className='text-lg mt-5 text-center'>{user.email}</p>
        <p className='text-lg mt-5 text-center'>{user.phone}</p>


        <h2 className='text-2xl font-bold mt-10'>Posts</h2>
        <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {posts.map((post) => (
            <div key={post.id} className='border p-5 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold'>{post.title}</h3>
              <p className='mt-2'>{post.body}</p>
            </div>
          ))}
        </div>

    </div>
    
  )
}

export default UserDetails