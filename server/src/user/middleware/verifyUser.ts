import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

const isUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //@ts-ignore
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.Token!);
    //@ts-ignore
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // @ts-ignore
    req.user = user;
    next();
  } catch (error: any) {
    console.log("Error in isUser: ", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};
