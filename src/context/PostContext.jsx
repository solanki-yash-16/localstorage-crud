import React, { createContext, useState, useEffect } from "react";
import { getLocalPosts, savePostsToLocal } from "../utils/localStorageUtils";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const localData = getLocalPosts();
    setPosts(localData);
  }, []);

  useEffect(() => {
    savePostsToLocal(posts);
  }, [posts]);

  const addPost = (post) => {
    const newPost = { ...post, id: Date.now() };
    setPosts((prev) => [newPost, ...prev]); // new post first
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};
