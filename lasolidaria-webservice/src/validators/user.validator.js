const { param, body } = require("express-validator");

const createUserValidator = [
    body('user_email')
        .isString().withMessage("User-email should be a string")
        .trim()
        .isLength({ min: 2 }).withMessage("User-email should have at least 2 characters"),

    body('user_name')
        .isString().withMessage("Username should be a string")
        .trim()
        .isLength({ min: 8, max: 240 })
        .withMessage("Username should have between 8 and 240 characters"),

    body('user_avatar')
        .isString().withMessage("Avatar should be a string")
        .isURL().withMessage("Avatar should be a valid URL"),

    /*body('stars')
        .isNumeric().withMessage("stars should be a number")
        .isInt({ min: 0, max: 5 }).withMessage("stars should be between 0 and 5"),

    body('favorite')
        .optional()
        .isBoolean().withMessage("favorite should be a boolean"),*/
];

const updateUserValidator = [
    body('user_email')
        .optional()
        .isString().withMessage("User-email should be a string")
        .trim()
        .isLength({ min: 2 }).withMessage("User-email should have at least 2 characters"),

    body('user_name')
        .optional()
        .isString().withMessage("Username should be a string")
        .trim()
        .isLength({ min: 8, max: 240 })
        .withMessage("Username should have between 8 and 240 characters"),

    body('User_avatar')
        .optional()
        .isString().withMessage("Avatar should be a string")
        .isURL().withMessage("Avatar should be a valid URL"),

    /*body('stars')
        .optional()
        .isNumeric().withMessage("stars should be a number")
        .isInt({ min: 0, max: 5 }).withMessage("stars should be between 0 and 5"),*/
];

const idInParams = [
    param("id")
        .notEmpty().withMessage("id field is required")
        .isMongoId().withMessage("id must be mongo id")
]

module.exports = { idInParams, createUserValidator, updateUserValidator };