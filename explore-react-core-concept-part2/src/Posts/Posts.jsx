import { useEffect, useState } from "react";
import Post from "./Post";
import "./Post.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "left", marginLeft: "250px" }}>
        Posts : {posts.length}
      </h2>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}
