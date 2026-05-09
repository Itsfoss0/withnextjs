import { BlogProps } from "../types/blog.types";

const Blog = ({ title, likes, author, link }: BlogProps) => {
  return (
    <div>
      <p>
        <strong>{title}</strong> {" "}
        by {author}{" "}
      </p>
      <p>{likes} likes </p>
      <a href={link}>{link}</a>
    </div>
  );
};

export default Blog;
