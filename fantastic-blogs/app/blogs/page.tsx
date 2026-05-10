import Link from "next/link";
import Blog from "../components/Blog.component";
import { getBlogs } from "../services/blog-service";

interface SearchParams {
  searchParams: Promise<{ filter?: string }>;
}

const BlogList = async ({ searchParams }: SearchParams) => {
  const { filter } = await searchParams;

  const allBlogs = getBlogs();

  const filterEnabled = filter && filter.trim() !== "";

  const blogsToShow = filterEnabled
    ? allBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(filter.toLowerCase()),
      )
    : allBlogs;

  return (
    <div>
      <h2>Blogs</h2>
      <div>
        <form action="/blogs" method="GET">
          <label htmlFor="filter">Search:</label>
          <input
            type="text"
            name="filter"
            id="filter"
            defaultValue={filter || ""}
          />
          <button type="submit">Search</button>
          {filterEnabled && (
            <Link href="/blogs">
              <button type="button">Clear</button>
            </Link>
          )}
        </form>
      </div>
      {blogsToShow.map((blog) => (
        <Blog
          key={blog.id}
          id={blog.id}
          title={blog.title}
          likes={blog.likes}
          author={blog.author}
          url={blog.url}
        />
      ))}
    </div>
  );
};

export default BlogList;
