"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditForm = ({ post }) => {
  const [title, setTitle] = useState(post.title || "");
  const [author, setAuthor] = useState(post.author || "");
  const [description, setDescription] = useState(post.description || "");

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatePostData = {
      title,
      author,
      description,
    };

    try {
      const response = await fetch(`/api/posts/${post._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePostData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Post updated successfully");
      router.push("/db-post");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Error updating post: " + error.message);
    }
  };

  return (
    <div>
      <form className="max-w-md mx-auto mt-10" onSubmit={handleUpdate}>
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
          <Button type="submit" className="w-full">
            Update Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
