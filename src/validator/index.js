const { body, validationResult } = require('express-validator');

const createPostValidator = [
    // Validate title
    body('title')
        .notEmpty().withMessage('Write a title')
        .isLength({ min: 4, max: 150 }).withMessage('Title must be between 4 to 150 characters'),

    // Validate body
    body('body')
        .notEmpty().withMessage('Write a body')
        .isLength({ min: 4, max: 2000 }).withMessage('Body must be between 4 to 2000 characters'),

    // Check for errors
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const firstError = errors.array()[0].msg;
            return res.status(400).json({ error: firstError });
        }
        next();
    }
];

module.exports = {
    createPostValidator
};