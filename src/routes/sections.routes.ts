import express, { Response } from "express";
import sectionModel from "../models/section.model";
import auth from "../middleware/auth";
import { IUserRequest } from "interfaces";

const router = express();

/* Create section, route - /api/section/create*/
router.post("/create", auth, async (req: IUserRequest, res: Response) => {
  try {
    const { name, color, description } = req.body;

    const existing = await sectionModel.findOne({ name });

    if (existing) {
      return res.json({ section: existing });
    }

    const section = new sectionModel({
      name,
      color,
      description,
      owner: req.user.userId,
    });

    await section.save();

    res.status(201).json({ section });
  } catch (e) {
    res.status(500).json({ message: "ERROR: the section doesn't create." });
  }
});

/* Update section, /api/section/{id} */
router.put(":id/update", auth, async () => {
  try {
  } catch (e) {}
});

/* Delete section, /api/section/{id} */
router.delete(":id/delete", auth, async () => {
  try {
  } catch (e) {}
});

/* Get sections, route - /api/section/all */
router.get("/all", auth, async () => {
  try {
  } catch (e) {}
});

module.exports = router;
