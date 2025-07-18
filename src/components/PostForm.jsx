import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.body) return;
    addPost(formData);
    setFormData({ title: "", body: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Body"
        value={formData.body}
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        className="border p-2 w-full"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
