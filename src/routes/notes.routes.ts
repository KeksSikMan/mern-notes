import express, { Response } from "express";
import Section from "../models/section.model";
import auth from "../middleware/auth";
import { IUserRequest } from "interfaces";
import { deleteNote, deleteNotes, insertNote } from "../controllers/note.controller";

const router = express();

/* Insert new note, route - /api/section/{id} */
router.put("/:idSection/create", auth, insertNote);

/* Delete notes, route - /api/section/{id} */
router.put("/:idSection/unset", auth, deleteNotes);

/* Delete note, route - /api/section/{idSection}/{idNote} */
router.put("/:idSection/:idNote", auth, deleteNote);

/* Update note route - /api/section/{id} */
router.patch(
  "/:idSection/:idNote",
  auth,
  async (req: IUserRequest, res: Response) => {
    try {
      const id = req.params.idSection;
      const update = req.body;
      const section = await Section.findByIdAndUpdate(id, update);
      res.status(200).json(section);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);



module.exports = router;
