const blogs = [
  {
    id: 1,
    title: "Migrating from ingress to gateway API",
    author: "Ebenezer Akhonya",
    url: "https://www.akhonyaebenezer.dev/posts/",
    likes: 20,
  },
  {
    id: 2,
    title: "SRE Best Practices",
    author: "Ebenezer Akhonya",
    url: "https://www.akhonyaebenezer.dev/posts/sre-best-practices",
    likes: 100,
  },
  {
    id: 3,
    title: "Introducing the blog",
    author: "Ebenezer Akhonya",
    url: "https://www.akhonyaebenezer.dev/posts/hello-world",
    likes: 23,
  },
  {
    id: 4,
    title: "Getting started with Nextjs",
    author: "Fullstack Open",
    url: "https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs/chapter-2",
    likes: 5,
  },
  {
    id: 5,
    title: "Observability at Scale",
    author: "Random Author",
    url: "https://www.akhonyaebenezer.dev/posts/",
    likes: 10,
  },
];

const nextBlogId = (): number => {
  return blogs.length + 1;
};

export const getBlogs = () => {
  return blogs;
};

export const addBlog = (
  title: string,
  author: string,
  url: string,
  likes = 10,
) => {
  blogs.push({ id: nextBlogId(), title, url, likes, author });
};
