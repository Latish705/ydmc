import { Request, Response } from "express";
import User from "../models/userModel";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if ([name, email, password].some((field) => field.trim() === "")) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      return res
        .status(400)
        .json({ success: true, message: "User already exists" });
    }
    const user = await User.create({ name, email, password });
    return res.status(201).json({ success: true, user });
  } catch (error) {
    console.log("Error in register: ", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if ([email, password].some((field) => field.trim() === "")) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    if (password !== user.password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    return res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Error in login: ", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
