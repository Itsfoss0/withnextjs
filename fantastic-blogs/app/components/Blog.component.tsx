import Link from "next/link";
import { BlogProps } from "../types/blog.types";

const Blog = ({ title, likes, author, url, id }: BlogProps) => {
  return (
    <div>
      <p>
        <Link href={`/blogs/${id}`}>
          {" "}
          <strong>{title}</strong> - {author}
        </Link>
      </p>
      <p>{likes} likes </p>
      <p>{url}</p>
    </div>
  );
};

export default Blog;
