import { Document, model, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
}

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = model<IBlog>("Blog", blogSchema);

export default Blog;
