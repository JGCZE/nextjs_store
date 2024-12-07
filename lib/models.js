import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 255,
    },
    price: {
      type: Number,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    available: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Items = mongoose.models?.Items || mongoose.model("Items", itemSchema);

export default Items;
