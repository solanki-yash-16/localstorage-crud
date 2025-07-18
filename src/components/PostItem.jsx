import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

const PostItem = ({ post }) => {
  const { deletePost, updatePost } = useContext(PostContext);
  const [editing, setEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);

  const handleSave = () => {
    updatePost(editedPost);
    setEditing(false);
  };

  return (
    <div className="border p-4 rounded mb-2">
      {editing ? (
        <>
          <input
            value={editedPost.title}
            onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
            className="border p-1 w-full mb-1"
          />
          <textarea
            value={editedPost.body}
            onChange={(e) => setEditedPost({ ...editedPost, body: e.target.value })}
            className="border p-1 w-full mb-1"
          />
          <button onClick={handleSave} className="text-green-600 mr-2">Save</button>
          <button onClick={() => setEditing(false)} className="text-gray-500">Cancel</button>
        </>
      ) : (
        <>
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.body}</p>
          <div className="mt-2 space-x-2">
            <button onClick={() => setEditing(true)} className="text-blue-600 cursor-pointer">Edit</button>
            <button onClick={() => deletePost(post.id)} className="text-red-600 cursor-pointer">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostItem;
