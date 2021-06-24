import { Response } from "express";
import Note from "../models/note.model";
import { IElement, IUserRequest } from "../interfaces";
import { INote } from "../interfaces/INote";

export const createNote = async (req: IUserRequest, res: Response) => {
  try {
    const idCategory = req.params.idCategory;
    const { title, description, favorite, color } = req.body;
    const note: INote = new Note({
      title,
      description,
      favorite,
      color,
      category: idCategory,
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

export const getNotes = async (req: IUserRequest, res: Response) => {
  try {
    const idCategory = req.params.idCategory;
    const notes = await Note.find({ category: idCategory });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteNote = async (req: IUserRequest, res: Response) => {
  try {
    const note = await Note.deleteOne({ _id: req.params.idNote });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
