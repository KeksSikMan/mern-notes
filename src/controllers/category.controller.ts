import { Response } from "express";

import Category from "../models/category.model";
import { IUserRequest } from "../interfaces";

export const createCategory = async (req: IUserRequest, res: Response) => {
  try {
    const { title, description, favorite, color } = req.body;
    const category = new Category({
      title,
      description,
      favorite,
      color,
      owner: req.user.userId,
    });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({
      message: "ERROR: the category doesn't create.",
      err: err.message,
    });
  }
};

export const getCategory = async (req: IUserRequest, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ category: category });
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
};

export const getAllCategories = async (req: IUserRequest, res: Response) => {
  try {
    const category = await Category.find({ owner: req.user.userId });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
};

export const updateCategory = async (req: IUserRequest, res: Response) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const category = await Category.findByIdAndUpdate(id, update, {
      upsert: true,
      new: true,
      runValidators: true,
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCategory = async (req: IUserRequest, res: Response) => {
  try {
    const category = await Category.deleteOne({ _id: req.params.id });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message, err });
  }
};
