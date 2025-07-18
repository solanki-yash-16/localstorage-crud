import React, { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useContext(PostContext);

  if (posts.length === 0) {
    return <p className="text-center">No posts found.</p>;
  }

  return (
    <div className="mt-4">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
