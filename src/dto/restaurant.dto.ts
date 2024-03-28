import { body } from "express-validator";
import { handleValidationErrors } from "../middlewares/validation.middleware";

export const validateMyRestaurantRequest = [
  body("restaurantName").notEmpty().withMessage("Restaurant name is required"),
  body("country").notEmpty().withMessage("Country is required"),
  body("city").notEmpty().withMessage("City is required"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("Delivery price must be positive number"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .withMessage("Estimated delivery time must be an integer"),
  body("cuisines")
    .isArray()
    .withMessage("Cusines must be an array")
    .notEmpty()
    .withMessage("Cuisnes array cannot be empty"),
  body("menuItems")
    .isArray()
    .withMessage("Menu items must be an array")
    .notEmpty()
    .withMessage("Menu items array cannot be empty"),
  body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage("Menu item price must be a positive number"),
  handleValidationErrors,
];
