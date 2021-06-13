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
router.get("/note/:idCategory", auth, getNotes);

router.delete("/note/:idNote", auth, deleteNote);

/** Update note */
router.patch("/note/:idNote", auth, updateNote);

/** Update note content */
router.put("/note/:idNote", auth, updateContent);

/** Clear note content */
router.put("/note/:idNote/clear", auth, clearContent);

module.exports = router;
