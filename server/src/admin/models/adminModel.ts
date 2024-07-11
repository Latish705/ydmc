import mongoose, { Schema, Document, Model } from 'mongoose';

interface IAdmin extends Document {
    email: string;
    username: string;
    password: string;
    role: string;
}

const AdminSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    role: { type: Number, required: true, default: 1 }
});

const Admin: Model<IAdmin> = mongoose.model<IAdmin>('Admin', AdminSchema);

export default Admin;