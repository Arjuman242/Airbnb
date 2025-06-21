const express = require("express");
const router = express.Router({mergeParams : true});
const AsyncWrap = require("../utils/AsyncWrap.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const {isLoggedin,validateReview,isReviewOwner} = require("../middleware.js");
const {addReview,destroyReview} = require("../controller/reviews.js");

// adding review route
router.post("/",isLoggedin,validateReview,AsyncWrap(addReview));

// deleting review fom listing db and review db
router.delete("/:reviewId",isLoggedin,isReviewOwner,AsyncWrap(destroyReview));
module.exports = router;