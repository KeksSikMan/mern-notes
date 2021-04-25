import express, { Response } from "express";
import Section from "../models/section.model";
import auth from "../middleware/auth";
import { IUserRequest } from "interfaces";

const router = express();

/* Create section, route - /api/section/create*/
router.post("/create", auth, async (req: IUserRequest, res: Response) => {
  try {
    const { name, description, favorite, color } = req.body;

    const existing = await Section.findOne({ name });

    if (existing) {
      return res.status(400).json({ message: "Such section already exists" });
    }

    const section = new Section({
      name,
      description,
      favorite,
      color,
      owner: req.user.userId,
    });

    await section.save();

    res.status(201).json({ section });
  } catch (err) {
    res.status(500).json({
      message: "ERROR: the section doesn't create.",
      err: err.message,
    });
  }
});

/* Update section, route - /api/section/{id} */
// don`t worked
router.patch("/:idSection", auth, async (req: IUserRequest, res: Response) => {
  try {
    const id = req.params.idSection;
    const updates = req.body;
    console.log(id, updates);
    const section = Section.findByIdAndUpdate(id, updates);

    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* Delete section, route - /api/section/:idSection */
router.delete("/:idSection", auth, async (req: IUserRequest, res: Response) => {
  try {
    const section = await Section.remove({ _id: req.params.idSection });
    res.status(200).json({ section: section });
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
    res.status(200).json({ section: section });
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
});

module.exports = router;
