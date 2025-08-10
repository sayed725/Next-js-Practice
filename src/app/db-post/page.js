"use client";
import { Button } from "@/components/ui/button";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import React, { useEffect, useState } from "react";

const PostsPage = () => {
//   await connectDB();

//   const posts = await Post.find().lean();

  // 2nd option

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
   

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');

    const data = await res.json();
    setPosts(data);
  };

  const createPost = async (e) => {
    e.preventDefault(); 

    const postData = {
        title,
        author,
        description,
    }

    try{

        await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),

        
      });

        alert("Post created successfully");

    } catch
      (error) {
      alert("Error creating post:", error);
    }

    setTitle("");
    setAuthor("");
    setDescription("");
    fetchPosts();
}

//   console.log(posts);

  return (
    <div className="min-h-screen mt-20 text-center">
      <h1 className="text-3xl font-bold">Posts Page</h1>


      <form className="max-w-md mx-auto mt-10" onSubmit={createPost}>
        <div className="mt-5">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border p-2 rounded w-full mb-3"
          />
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="border p-2 rounded w-full mb-3"
          />
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="border p-2 rounded w-full mb-3"
          ></textarea>
          <Button type="submit" className="w-full">Create Post</Button>
        </div>
      </form>



      {posts.map((post) => (
        <div key={post._id} className="border-2 p-5 rounded-lg shadow-md mt-5">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.author}</p>
          <p className="mt-2">{post.description}</p>
          <Button className='mt-5'>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
