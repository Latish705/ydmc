import { Request, Response } from "express";
import Blog from "../models/blogModel";

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json({ success: true, blogs });
  } catch (error: any) {
    console.log("Error in getBlogs: ", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const postBlog = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    if ([title, content].some((field) => field.trim() === "")) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }
    const blog = await Blog.create({ title, content });
    return res.status(201).json({ success: true, blog });
  } catch (error: any) {
    console.log("Error in postBlog: ", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
