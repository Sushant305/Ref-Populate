  import React, { useEffect } from "react";
  import { useUserPostContext } from "../hooks/useUserPostContext";
  import PostDetails from "../components/PostDetails";

  const Home = () => {
    const { posts, dispatch } = useUserPostContext();

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`);
          const json = await response.json();

          if (!response.ok) {
            throw new Error(json.error || "Failed to fetch posts");
          }
          dispatch({
            type: "SET_POSTS",
            payload: json,
          });
        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };
      fetchPosts();
    }, [dispatch]);

    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-slate-800">All Posts</h1>
        {posts.length === 0 ? (
          <p className="text-slate-800">No Posts Available</p>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <PostDetails key={post._id} post={post}></PostDetails>
            ))}
          </div>
        )}
      </div>
    );
  };

  export default Home;
