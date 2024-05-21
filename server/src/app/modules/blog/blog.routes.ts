import express from "express";

import auth from "../../middlewares/auth";
import { BlogController } from "./blog.controller";
import validateRequest from "../../middlewares/validateRequest";
import { BlogValidationSchemas } from "./blog.validation";

const router = express.Router();

router.post(
  "/blog",
  validateRequest(BlogValidationSchemas.blogSchema),
  auth(),
  BlogController.createBlog
);

router.get("/blogs", BlogController.getBlogs);

router.put(
  "/blog/:blogId",
  validateRequest(BlogValidationSchemas.blogUpdateSchema),
  auth(),
  BlogController.updateBlogById
);

router.delete("/blog/:blogId", auth(), BlogController.deleteBlogById);

export const BlogRoutes = router;
