import express from "express";
import auth from "../middleware/auth";

import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from "../controllers/category.controller";

const router = express();

router.post("/create", auth, createCategory);

router.patch("/:id", auth, updateCategory);

router.get("/:id", auth, getCategory);

router.get("/", auth, getAllCategories);

router.delete("/:id", auth, deleteCategory);

module.exports = router;
