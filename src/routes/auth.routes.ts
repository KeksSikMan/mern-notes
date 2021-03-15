import express from "express";
import { check } from "express-validator";

import auth from "../middleware/auth";

import { getUser, signIn, signUp } from "../controllers/auth.controller";

const router = express();

/* Registration, route - /api/auth/signup */
router.post(
  "/signup",
  [
    check("email", "Incorrect mail").isEmail(),
    check("password", "Incorrect password, min 6 and max 16").isLength({
      min: 6,
    }),
  ],
  signUp
);

/* Authorization, route - /api/auth/signin */
router.post(
  "/signin",
  [
    check("email", "Enter mail").normalizeEmail().isEmail(),
    check("password", "Enter password").exists(),
  ],
  signIn
);

/* Get user, route - /api/auth/user */
router.get("/user", auth, getUser);

module.exports = router;
