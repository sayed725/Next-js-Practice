import { connectDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import React from 'react'

const PostDetails = async({ params }) => {

    const { id } = await params;
     
    await connectDB();

    const data = await Post.findById(id).lean();

    const post = JSON.parse(JSON.stringify(data));





  return (
    <div className='text-center mt-10 min-h-screen'>
       <h1> PostDetails</h1>
         <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.author}</p>
            <p className="mt-2">{post.description}</p>
           
    </div>
  )
}

export default PostDetails