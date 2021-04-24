import express, { Response } from "express";
import Section from "../models/section.model";
import auth from "../middleware/auth";
import { IUserRequest } from "interfaces";

const router = express();

/* Create section, route - /api/section/create*/
router.post("/create", auth, async (req: IUserRequest, res: Response) => {
  try {
    const { name } = req.body;

    const existing = await Section.findOne({ name });

    if (existing) {
      return res.status(400).json({ message: "Such section already exists" });
    }

    const section = new Section({
      name,
      owner: req.user.userId,
    });

    await section.save();

    res.status(201).json({ section });
  } catch (e) {
    res.status(500).json({ message: "ERROR: the section doesn't create." });
  }
});

/* Update section, route - /api/section/{id} */
router.put("/:id/update", auth, async () => {
  try {
  } catch (e) {}
});

/* Delete section, route - /api/section/{id} */
router.delete("/:{id}/delete", auth, async () => {
  try {
  } catch (e) {}
});

/* Get sections, route - /api/section/all */
router.get("/all", auth, async (req: IUserRequest, res: Response) => {
  Section.find({ owner: req.user.userId })
    .exec()
    .then((results) => {
      return res.status(200).json({ section: results });
    })
    .catch((e) => {
      return res.status(500).json({ message: e.message, e });
    });
});

module.exports = router;
