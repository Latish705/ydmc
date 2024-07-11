import { Request, Response } from 'express';
import Admin from '../models/adminModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secret = 'ehvrgnedfsdfsegbre';

export const registerAdmin = async (req: Request, res: Response) => {
    const { username, password, email } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({username, password: hashedPassword, email });
        await newAdmin.save();

        res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
};

export const loginAdmin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if(!admin) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: admin._id, role: admin.role}, secret, { expiresIn: '1h'});

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error});
    }
};

export const getAdminDashboard = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to the Admin dashboard' })
}