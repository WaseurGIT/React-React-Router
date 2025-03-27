import "./Post.css";

export default function Post({ post }) {
  const { id, title, body } = post;

  return (
    <div className="post">
      <h2>Post Id: {id}</h2>
      <h4>Post Title: {title}</h4>
      <h5>{body}</h5>
    </div>
  );
}
