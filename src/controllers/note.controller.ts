import express, { Response } from "express";
import Section from "../models/section.model";
import auth from "../middleware/auth";
import { IUserRequest } from "interfaces";

/** Insert new note */
export const insertNote = async (req: IUserRequest, res: Response) => {
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
};

/** Delete all notes */
export const deleteNotes = async (req: IUserRequest, res: Response) => {
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
};

/** Delete one note */
export const deleteNote = async (req: IUserRequest, res: Response) => {
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
};
