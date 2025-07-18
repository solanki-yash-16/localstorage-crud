import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

const App = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">React CRUD with Context & LocalStorage</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default App;
