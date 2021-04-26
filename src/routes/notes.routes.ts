import express from "express";
import auth from "../middleware/auth";

import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "../controllers/note.controller";

const router = express();

/** Create note */
router.post("/:idSection/create", auth, createNote);

/** Get all notes */
router.get("/note/:idSection", auth, getNotes);

/** Delete note */
router.delete("/note/:idNote", auth, deleteNote);

/** Update note */
router.patch("/note/:idNote", auth, updateNote);

module.exports = router;
