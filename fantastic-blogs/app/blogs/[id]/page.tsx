import { getBlogByID } from "@/app/services/blog-service";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageParams } from "../../types/blog.types";
import { actionLikeBlog } from "@/app/actions/blog.actions";

const BlogDetailedView = async ({ params }: PageParams) => {
  const { id } = await params;
  const blog = getBlogByID(Number(id));

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>Authored By: {blog.author}</p>
      <p>{blog.likes} likes</p>
      <form action={actionLikeBlog}>
        <input type="hidden" name="id" id="id" value={blog.id} />
        <button>Like</button>
      </form>
      <Link href={blog.url}>{blog.url}</Link>
    </div>
  );
};

export default BlogDetailedView;
