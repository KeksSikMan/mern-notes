import express from "express";
import auth from "../middleware/auth";

import {
  clearContent,
  createNote,
  deleteNote,
  getNotes,
  updateContent,
  updateNote,
} from "../controllers/note.controller";

const router = express();

router.post("/:idCategory/create", auth, createNote);

/** Get all notes */
router.get("/:idCategory", auth, getNotes);

router.delete("/:idNote", auth, deleteNote);

/** Update note */
router.patch("/:idNote", auth, updateNote);

/** Update note content */
router.put("/:idNote", auth, updateContent);

/** Clear note content */
router.put("/:idNote/clear", auth, clearContent);

module.exports = router;
