import express, { Router } from "express";
import { param } from "express-validator";
import { searchRestaurant } from "../controllers/restaurant.public.controller";

const router: Router = express.Router();

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
