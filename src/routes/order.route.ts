import express, { Router } from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";
import { createCheckoutSession } from "../controllers/order.controller";

const router: Router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  createCheckoutSession
);

export default router;
