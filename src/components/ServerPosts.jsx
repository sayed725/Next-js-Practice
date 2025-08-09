import React from "react";

const ServerPosts = async () => {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

//   console.log(posts);

  return (
    <div>
      <h1>Posts</h1>
      <p>Welcome to the posts page!</p>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-gray-100 text-black shadow-lg rounded-md dark:text-white mt-2"
          >
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerPosts;
