import { Router } from "express";

import {
    changeCurrentPassword,
    forgotPasswordRequest,
    getCurrentUser,
    login,
    logoutUser,
    refreshAccessToken,
    registerUser,
    resendEmailVerification,
    resetForgotPassword,
    verifyEmail
} from "../controllers/auth.controllers.js";

// Middlewares
import {validate} from "../middlewares/validator.middleware.js";
import { userRegistrationValidator } from "../validators/index.js";
import { userLoginValidator } from "../validators/index.js";

const router = Router();

router.route("/register").post(userRegistrationValidator(),validate,registerUser);
router.route("/login").post(userLoginValidator(),validate,login);
// router.route("/login").post(login);

export default router;