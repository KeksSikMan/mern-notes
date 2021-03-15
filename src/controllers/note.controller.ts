import { Response } from "express";
import Note from "../models/note.schema";
import { IElement, INote, IUserRequest } from "../types/interfaces";

/** Create new note */
export const createNote = async (req: IUserRequest, res: Response) => {
  try {
    const idSection = req.params.idSection;

    const { title, description, favorite, color } = req.body;

    const note = new Note({
      title,
      description,
      favorite,
      color,
      section: idSection,
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({
      message: "ERROR: the note doesn't create.",
      err: err.message,
    });
  }
};

/** Get all notes */
export const getNotes = async (req: IUserRequest, res: Response) => {
  try {
    const idSection = req.params.idSection;
    const notes = await Note.find({ section: idSection });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/** Delete note */
export const deleteNote = async (req: IUserRequest, res: Response) => {
  try {
    const note = await Note.deleteOne({ _id: req.params.idNote });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/** Update note */
export const updateNote = async (req: IUserRequest, res: Response) => {
  try {
    const id = req.params.idNote;
    const update: INote = req.body;
    const note = await Note.findByIdAndUpdate(id, update, {
      upsert: true,
      new: true,
      runValidators: true,
    });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateContent = async (req: IUserRequest, res: Response) => {
  try {
    const id = req.params.idNote;
    const content: IElement = req.body;
    const note = await Note.findByIdAndUpdate(
      id,
      {
        $addToSet: { content },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const clearContent = async (req: IUserRequest, res: Response) => {
  try {
    const id = req.params.idNote;
    const content: IElement = req.body;
    const note = await Note.findByIdAndUpdate(
      id,
      {
        $pull: { content: {} },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
