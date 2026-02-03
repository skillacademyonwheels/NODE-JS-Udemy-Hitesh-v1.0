import {body} from 'express-validator';

const userRegistrationValidator = () => {
    return [
        body("email")
        .trim()
        .isEmail()
        .withMessage("Email is required"),
        body("username")
        .trim()
        .notEmpty()
        .isLength({ min: 3, max: 20 })
        .isLowercase()
        .withMessage("Username must be between 3 and 20 characters"),
        body("password")
        .trim()
        .notEmpty()
        .isLength({ min: 6, max: 20 })
        .withMessage("Password must be between 6 and 20 characters"),
        body("fullName")
        .trim()
        .optional()
        .isLength({ min: 3, max: 100 })
        .withMessage("Full name must be between 3 and 100 characters")
    ];
}

const userLoginValidator = () => {
    return [
        body("email")
        .optional()
        .isEmail()
        .withMessage("Valid email is required"),
        body("password")
        .notEmpty()
        .withMessage("Password is required")
    ];
};

export {
    userRegistrationValidator,
    userLoginValidator
}