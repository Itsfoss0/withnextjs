import Blog from "../components/Blog.component";
import { getBlogs } from "../services/blog-service";

const BlogList = () => {
  const blogs = getBlogs();

  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          title={blog.title}
          likes={blog.likes}
          author={blog.author}
          link={blog.url}
        />
      ))}
    </div>
  );
};

export default BlogList;
