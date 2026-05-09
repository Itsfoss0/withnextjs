import { addNewBlogAction } from "@/app/actions/blog.actions";

const NewBlogForm = () => {
  return (
    <div>
      <h2>New Blog</h2>
      <form action={addNewBlogAction}>
        <div>
          <label htmlFor="title">Blog Title:</label>
          <input type="text" name="title" id="title" />
        </div>
        <br />
        <div>
          <label htmlFor="author">Authored By:</label>
          <input type="text" name="author" id="author" />
        </div>
        <br />
        <div>
          <label htmlFor="url">Link:</label>
          <input type="text" name="url" id="url" />
        </div>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
