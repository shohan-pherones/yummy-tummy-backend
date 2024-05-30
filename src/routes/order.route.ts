import express, { Router } from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";
import {
  createCheckoutSession,
  getMyOrders,
  stripeWebhookController,
} from "../controllers/order.controller";

const router: Router = express.Router();

router.get("/", jwtCheck, jwtParse, getMyOrders);
router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  createCheckoutSession
);
router.post("/checkout/webhook", stripeWebhookController);

export default router;
