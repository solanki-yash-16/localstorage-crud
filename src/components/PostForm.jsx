import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    setFormData({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto my-6">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border"
        required
      />
      <textarea
        name="body"
        placeholder="Body"
        value={formData.body}
        onChange={handleChange}
        className="w-full p-2 border"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
