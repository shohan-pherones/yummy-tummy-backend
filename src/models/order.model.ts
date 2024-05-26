import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    restaurant: { type: Schema.Types.ObjectId, ref: "Restaurant" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    deliveryDetails: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      addressLine1: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    cartItems: [
      {
        menuItemId: { type: String, required: true },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number },
    status: {
      type: String,
      enum: ["placed", "paid", "inProgress", "outForDelivery", "delivered"],
      default: "placed",
    },
  },
  {
    timestamps: true,
  }
);

const Order = model("Order", orderSchema);

export default Order;
