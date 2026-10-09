import React from "react";

const PostDetails = ({ post }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <h2 className="text-xl font-bold text-slate-800">{post.title}</h2>

      <p className="mt-2 text-slate-600"> {post.content} </p>

      <div className="mt-4 border-t border-slate-100 pt-3">
        <p className="text-sm font-medium text-slate-700">
          Author: {post.user?.name || "unknown User"}
        </p>

        <p className="text-sm text-slate-500">
          Email: {post.user?.email || "No email available"}
        </p>
      </div>
    </div>
  );
};

export default PostDetails;
