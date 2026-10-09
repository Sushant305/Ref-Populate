import React, { useEffect } from "react";
import { useUserPostContext } from "../hooks/useUserPostContext";
import PostForm from "../components/PostForm"


const CreatePost = () => {
  const { dispatch } = useUserPostContext();

  useEffect(() => {
    const fetchusers = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`);
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.error || "Failed to fetch users");
        }
        dispatch({
          type: "SET_USERS",
          payload: json,
        });
      } catch (error) {
        console.error("Error fetching the Usere:", error.message);
      }
    };
    fetchusers();
  }, [dispatch]);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="text-3xl font-bold text-slate-800 ">Create Post</h1>
      <PostForm/>
    </div>
  );
};

export default CreatePost;
