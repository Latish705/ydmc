import { Document, model, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
