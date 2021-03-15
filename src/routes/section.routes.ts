import express from "express";
import auth from "../middleware/auth";

import {
  createSection,
  deleteSection,
  getAllSections,
  getSection,
  updateSection,
} from "../controllers/section.controller";

const router = express();

/* Create section, route - /api/section/create*/
router.post("/create", auth, createSection);

/* Update section, route - /api/section/{id} */
router.patch("/:idSection", auth, updateSection);

/* Get section, route - /api/section/:idSection */
router.get("/:idSection", auth, getSection);

/* Get all sections, route - /api/section/ */
router.get("/", auth, getAllSections);

/* Delete section, route - /api/section/:idSection */
router.delete("/:idSection", auth, deleteSection);

module.exports = router;
