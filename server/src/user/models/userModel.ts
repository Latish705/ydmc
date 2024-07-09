import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  date_joined: Date;
  profile_picture: string;
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
  address: {
    type: String,
    required: false,
  },
  date_joined: {
    type: Date,
    default: Date.now,
  },
  profile_picture: {
    type: String,
    required: false,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
