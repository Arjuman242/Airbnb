const joi = require("joi");//it help to check schema validation so that you dont have to handle error for every property
// joi help us to create server side validation schema its not mongoose schema 

const listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().allow("", null),
        location: joi.string().required(),
        country: joi.string().required(),
        price: joi.number().required().min(0)
    }).required()
});

const reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number().min(1).max(5).required(),
        comment: joi.string().required()
    }).required()
});

module.exports = { listingSchema, reviewSchema };
