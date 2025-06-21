const express = require("express");
const router = express.Router({mergeParams : true});
const AsyncWrap = require("../utils/AsyncWrap.js");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const{signupForm,signupSubmit,loginForm,loginSubmit,logout} = require("../controller/user.js");

// routes 
// using router.route to combine routes to make it more readable
router.route("/signup")
.get(signupForm)
.post(AsyncWrap(signupSubmit));
// now if there is a request on signup based on what typ eof request is above function will get executed

// now for login setting up route
router.route("/login")
.get(loginForm)
.post(saveRedirectUrl,
    passport.authenticate("local",
    {failureRedirect :"/login",
    failureFlash: true}) ,
    loginSubmit
);

router.get("/logout",logout) // not needed for logout as there is only one route 

module.exports = router;