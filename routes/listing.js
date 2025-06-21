const express = require("express");
const router = express.Router();
const AsyncWrap = require("../utils/AsyncWrap.js");
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const {isLoggedin} = require("../middleware.js");
const {isOwner,validateListing }= require("../middleware.js");
const {create,submitCreated,index,show,edit,update,destroyListing} = require("../controller/listing.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});
// Create Route
router.get("/new",isLoggedin,create );

router.post("/create",isLoggedin,upload.single("listing[image]"),validateListing, AsyncWrap(submitCreated));

// Index Route
router.get("/", AsyncWrap(index));

// Show Route
router.get("/:id/show", AsyncWrap(show));

// Edit Route
router.get("/:id/edit",isLoggedin,isOwner, AsyncWrap(edit));

// Update Route
router.put("/:id/update",isLoggedin,isOwner,upload.single("listing[image]"),validateListing, AsyncWrap(update));

// Delete Route


router.delete("/:id/delete",isLoggedin,isOwner, AsyncWrap(destroyListing));


module.exports = router;

