import { Document, model, Schema } from "mongoose";
import { IUser } from "../../user/models/userModel";

export interface ICar extends Document {
  make: string;
  model_name: string;
  year: number;
  price: number;
  color: string;
  vin: string;
  mileage: number;
  transmission: string;
  fuel_type: string;
  description: string;
  date_listed: Date;
  status: string;
  sellerId: IUser["_id"];
  meters: number;
}

const carSchema = new Schema<ICar>({
  make: {
    type: String,
    required: true,
  },
  model_name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  vin: {
    type: String,
    required: true,
    unique: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date_listed: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  meters: {
    type: Number,
    required: true,
  },
});

const Car = model<ICar>("Car", carSchema);

export default Car;
