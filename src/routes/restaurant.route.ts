import express, { Router } from "express";
import {
  createMyRestaurant,
  getMyRestaurant,
} from "../controllers/restaurant.controller";
import { upload } from "../utils/multer.util";
import { validateMyRestaurantRequest } from "../dto/restaurant.dto";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.get("/", jwtCheck, jwtParse, getMyRestaurant);
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  createMyRestaurant
);

export default router;
