import express, { Router } from "express";
import {
  createMyRestaurant,
  getMyRestaurant,
  getMyRestaurantOrder,
  updateMyRestaurant,
} from "../controllers/restaurant.controller";
import { upload } from "../utils/multer.util";
import { validateMyRestaurantRequest } from "../dto/restaurant.dto";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.get("/order", jwtCheck, jwtParse, getMyRestaurantOrder);
router.get("/", jwtCheck, jwtParse, getMyRestaurant);
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  createMyRestaurant
);
router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  updateMyRestaurant
);

export default router;
