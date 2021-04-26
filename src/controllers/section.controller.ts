import { Response } from "express";

import Section from "../models/section.model";
import { IUserRequest } from "interfaces";

/** Create section */
export const createSection = async (req: IUserRequest, res: Response) => {
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
};

/** Get section */
export const getSection = async (req: IUserRequest, res: Response) => {
  try {
    const section = await Section.findById(req.params.idSection);
    res.status(200).json({ section: section });
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
};

/** Get all sections */
export const getAllSections = async (req: IUserRequest, res: Response) => {
  try {
    const section = await Section.find({ owner: req.user.userId });
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
};

/** Update section */
export const updateSection = async (req: IUserRequest, res: Response) => {
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
};

/** Delete section */
export const deleteSection = async (req: IUserRequest, res: Response) => {
  try {
    const section = await Section.deleteOne({ _id: req.params.idSection });
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
};
