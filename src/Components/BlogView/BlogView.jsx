import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./Blogview.css"

const BlogView = () => {
  const { state } = useLocation();
  const { id } = useParams();

  // Access blog data
  const blog = state?.blog;

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="blogviewcontainer">
      <h1 className="blogtitle">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blogimg" />
      <p className="blogcontent">{blog.content}</p>
      <p>
        By <strong>{blog.author}</strong> on {blog.date}
      </p>
    </div>
  );
};

export default BlogView;
