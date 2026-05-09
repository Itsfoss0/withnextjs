"use server";

import { revalidatePath } from "next/cache";
import { addBlog, likeBlog } from "../services/blog-service";
import { redirect } from "next/navigation";

export const addNewBlogAction = async (data: FormData) => {
  const author = data.get("author") as string;
  const title = data.get("title") as string;
  const url = data.get("url") as string;

  addBlog(title, author, url);

  revalidatePath("/blogs");
  redirect("/blogs");
};

export const actionLikeBlog = async (data: FormData) => {
  const id = data.get("id") as string;
  likeBlog(Number(id));

  revalidatePath("/blogs");
  revalidatePath(`/blogs/${id}`);
};
