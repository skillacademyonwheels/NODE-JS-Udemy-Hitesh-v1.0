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
import { userRegisterValidator } from "../validators/index1.js";
import { userLoginValidator } from "../validators/index1.js";
import  {verifyJWT} from "../middlewares/auth.middleware.js";

const router = Router();

// router.route("/register").post(userRegistrationValidator(),validate,registerUser);
// router.route("/login").post(userLoginValidator(),validate,login);
router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(userLoginValidator(), validate, login);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;