import React, { useState } from "react";
import { useUserPostContext } from "../hooks/useUserPostContext";

const PostForm = () => {
  const { users, dispatch } = useUserPostContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
        method: "POST",
        body: JSON.stringify({ title, content, user }),
        headers: {
          "content-type": "application/json",
        },
      });
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.error || "faild to create post");
      }
      dispatch({
        type: "CREATE_POST",
        payload: json,
      });
      setTitle("");
      setContent("");
      setUser("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label
            htmlFor="title"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Title :
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your Title"
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <textarea
            name=""
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post Content"
            required
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          ></textarea>
        </div>

        <div>
          <select
            name=""
            id="user"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
            required
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select author:</option>
            {users.map((eachuser) => (
              <option key={eachuser._id} value={eachuser._id}>
                {eachuser.name} ({eachuser.email})
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "creating Post..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
