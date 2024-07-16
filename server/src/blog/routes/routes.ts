import { Router } from "express";
import { getBlogs, postBlog } from "../controller/blogController";

const blogRoutes = Router();

blogRoutes.get("/blogs", getBlogs);
blogRoutes.post("/", postBlog);

export default blogRoutes;
