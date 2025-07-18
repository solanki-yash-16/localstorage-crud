import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";

const PostList = () => {
  const { posts, deletePost } = useContext(PostContext);

  return (
    <div className="max-w-md mx-auto space-y-3">
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
            <button
              className="mt-2 text-red-500"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
