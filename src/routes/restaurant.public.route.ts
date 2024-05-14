import express, { Router } from "express";
import { param } from "express-validator";
import {
  getPublicRestaurant,
  searchRestaurant,
} from "../controllers/restaurant.public.controller";

const router: Router = express.Router();

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("Restaurant ID parameter must be a valid string"),
  getPublicRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City parameter must be a valid string"),
  searchRestaurant
);

export default router;
