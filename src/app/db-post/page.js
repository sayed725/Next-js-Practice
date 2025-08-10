import { connectDB } from '@/lib/mongodb'
import { Post } from '@/models/Post';
import React from 'react'

const PostsPage = async() => {


    // await connectDB();

    // const posts = await Post.find().lean();


    // 2nd option 




    // console.log(posts);


  return (
    <div className='min-h-screen mt-20 text-center'>
        <h1 className='text-3xl font-bold'>Posts Page</h1>

        {
            posts.map((post) => (
                <div key={post._id} className='border-2 p-5 rounded-lg shadow-md mt-5'>
                    <h2 className='text-xl font-semibold'>{post.title}</h2>
                    <p className='mt-2'>{post.author}</p>
                    <p className='mt-2'>{post.description}</p>
                </div>
            ))
        }



        </div>
  )
}

export default PostsPage