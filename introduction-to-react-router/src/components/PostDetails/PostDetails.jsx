import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  const { postId } = useParams();

  console.log(postId);

  return (
    <div className="postDetails">
      <h2>Post Id: {id}</h2>
      <h4>Title: {title}</h4>
      <h4>Post Details : {body}</h4>
    </div>
  );
};

export default PostDetails;
