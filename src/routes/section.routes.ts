import express, { Response } from "express";
import Section from "../models/section.model";
import auth from "../middleware/auth";
import { IUserRequest } from "interfaces";

const router = express();

/* Create section, route - /api/section/create*/
router.post("/create", auth, async (req: IUserRequest, res: Response) => {
  try {
    const { title, description, favorite, color, notes } = req.body;

    const section = new Section({
      title,
      description,
      favorite,
      color,
      notes,
      owner: req.user.userId,
    });
    await section.save();
    res.status(201).json(section);
  } catch (err) {
    res.status(500).json({
      message: "ERROR: the section doesn't create.",
      err: err.message,
    });
  }
});

/* Update section, route - /api/section/{id} */
router.patch("/:idSection", auth, async (req: IUserRequest, res: Response) => {
  try {
    const id = req.params.idSection;
    const update = req.body;
    const section = await Section.findByIdAndUpdate(id, update, {
      upsert: true,
      new: true,
      runValidators: true,
    });
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

/* Insert new note, route - /api/section/{id} */
router.put(
  "/:idSection/create",
  auth,
  async (req: IUserRequest, res: Response) => {
    try {
      const id = req.params.idSection;
      const notes = req.body;
      const section = await Section.findByIdAndUpdate(
        id,
        { $addToSet: { notes } },
        { upsert: true, new: true, runValidators: true }
      );
      res.status(200).json(section);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

/* Delete notes, route - /api/section/{id} */
router.put(
  "/:idSection/unset",
  auth,
  async (req: IUserRequest, res: Response) => {
    try {
      const id = req.params.idSection;
      const section = await Section.findByIdAndUpdate(
        id,
        { $unset: { notes: "" } },
        { upsert: true, new: true, runValidators: true }
      );
      res.status(200).json(section);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

/* Delete note, route - /api/section/{idSection}/{idNote} */
router.put(
  "/:idSection/:idNote",
  auth,
  async (req: IUserRequest, res: Response) => {
    try {
      const idSection = req.params.idSection;
      const idNote = req.params.idNote;
      const section = await Section.findByIdAndUpdate(
        idSection,
        { $pull: { notes: { _id: idNote } } },
        { upsert: true, new: true, runValidators: true }
      );
      res.status(200).json(section);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

/* Delete section, route - /api/section/:idSection */
router.delete("/:idSection", auth, async (req: IUserRequest, res: Response) => {
  try {
    const section = await Section.deleteOne({ _id: req.params.idSection });
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
});

/* Get section, route - /api/section/:idSection */
router.get("/:idSection", auth, async (req: IUserRequest, res: Response) => {
  try {
    const section = await Section.findById(req.params.idSection);
    res.status(200).json({ section: section });
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
});

/* Get all sections, route - /api/section/ */
router.get("/", auth, async (req: IUserRequest, res: Response) => {
  try {
    const section = await Section.find({ owner: req.user.userId });
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
});

module.exports = router;
