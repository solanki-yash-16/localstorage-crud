export const getLocalPosts = () => {
  const data = localStorage.getItem("posts");
  return data ? JSON.parse(data) : [];
};

export const savePostsToLocal = (posts) => {
  localStorage.setItem("posts", JSON.stringify(posts));
};
