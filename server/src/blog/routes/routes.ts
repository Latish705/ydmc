import { Router } from "express";
import { getBlogs, postBlog } from "../controller/blogController";

const blogRoutes = Router();

blogRoutes.get("/blogs", getBlogs);
blogRoutes.post("/blog", postBlog);

export default blogRoutes;
