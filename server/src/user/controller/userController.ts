import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcryptjs";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone, address, profile_picture } = req.body;
    if (
      [name, email, password, phone, address, profile_picture].some(
        (field) => field.trim() === ""
      )
    ) {
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      profile_picture,
    });
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
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
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
