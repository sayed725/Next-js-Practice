"use client";
import { connectDB } from "@/lib/mongodb";
import { Post } from "@/models/Post";
import React, { useEffect, useState } from "react";

const PostsPage = () => {
//   await connectDB();

//   const posts = await Post.find().lean();

  // 2nd option

  const [posts, setPosts] = useState([]);
   

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts');

    const data = await res.json();
    setPosts(data);
  };

//   console.log(posts);

  return (
    <div className="min-h-screen mt-20 text-center">
      <h1 className="text-3xl font-bold">Posts Page</h1>

      {posts.map((post) => (
        <div key={post._id} className="border-2 p-5 rounded-lg shadow-md mt-5">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2">{post.author}</p>
          <p className="mt-2">{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
