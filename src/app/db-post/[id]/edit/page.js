import { connectDB } from '@/lib/mongodb';
import { Post } from '@/models/Post';
import React from 'react'
import EditForm from './EditForm';

const PostEdit = async({params}) => {

    const { id } = await params;

    await connectDB();

    const data = await Post.findById(id).lean();
    const post = JSON.parse(JSON.stringify(data));

    if (!post) {
        return <div className='text-center mt-10 min-h-screen'>Post not found</div>;
    }
   



  return (
    <div className='text-center mt-10 min-h-screen'>
        <h1 className='text-center mt-10 text-2xl font-bold'>Edit Post</h1>


        <EditForm post={post} />

       



       


   </div>
  )
}

export default PostEdit