import { Request, Response } from "express";

import User from "../../user/models/userModel";

const secret = "ehvrgnedfsdfsegbre";
export const loginAdmin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const admin = await User.findOne({ username, isAdmin: true });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = admin.generateToken();
    const options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie("token", token, options)
      .json({ success: true, token });
  } catch (error: any) {
    console.log("Error in loginAdmin: ", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};

export const getAdminDashboard = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Admin dashboard" });
};
