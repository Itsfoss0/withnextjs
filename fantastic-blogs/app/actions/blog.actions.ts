"use server"


import { revalidatePath } from "next/cache";
import { addBlog } from "../services/blog-service";
import { redirect } from "next/navigation";

export const addNewBlogAction = async (data: FormData) => {
  const author = data.get("author") as string;
  const title = data.get("title") as string;
  const url = data.get("url") as string;

  addBlog(title, author, url);

  revalidatePath("/blogs");
  redirect("/blogs");
};
