import Blog from "../components/Blog.component";
import { getBlogs } from "../services/blog-service";

const BlogList = async () => {
  const blogs = getBlogs();  
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map((blog) => (
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
