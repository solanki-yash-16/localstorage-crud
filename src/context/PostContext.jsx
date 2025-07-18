import React, { createContext, useState, useEffect } from "react";
import { getLocalPosts, savePostsToLocal } from "../utils/localStorageUtils";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = getLocalPosts();
    setPosts(stored);
  }, []);

  useEffect(() => {
    savePostsToLocal(posts);
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};
