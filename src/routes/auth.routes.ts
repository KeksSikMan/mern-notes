import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { configuration } from "../../config/config";
import auth from "../middleware/auth";
import User from "../models/user.model";

const router = express();

const jwtSecret: string = configuration.jwt_secret;

/* Registration, route - /api/auth/signup */
router.post(
  "/signup",
  [
    check("email", "Incorrect mail").isEmail(),
    check("password", "Incorrect password, min 6 and max 16").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect registration",
        });
      }

      const { firstName, lastName, email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "Such email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      await user.save();

      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "10h",
      });

      res.json({
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    } catch (e) {
      res.status(500).json({ message: "ERROR: failed registration." });
    }
  }
);

/* Authorization, route - /api/auth/signin */
router.post(
  "/signin",
  [
    check("email", "Enter mail").normalizeEmail().isEmail(),
    check("password", "Enter password").exists(),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Incorrect login",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ message: "The entered emaill or password is not correct" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "The entered email or password is not correct" });
      }

      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: "10h",
      });

      res.json({
        token,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    } catch (e) {
      res.status(500).json({ message: "ERROR: failed authorization" });
    }
  }
);

interface IUserRequest extends express.Request {
  user: any;
}

/* Get user, route - /api/auth/user */
router.get("/user", auth, async (req: IUserRequest, res: Response) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    //console.log(user);
    if (!user) throw Error("User does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
