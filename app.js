if(process.env.NODE_ENV != "production"){//only require inside development stage
    require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listings = require("./routes/listing.js");
const review = require("./routes/reviews.js");
const user = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const dbUrl = process.env.ATLASDB_URL;

// Database connection
async function main() {
    await mongoose.connect(dbUrl);
}

main()
    .then(() => {
        console.log("connection successful with mongodb");
    })
    .catch((err) => {
        console.log(err);
    });



// Set up ejs-mate
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const store = MongoStore.create({
    mongoUrl : dbUrl,
    crypto : {
        secret : process.env.SECRET
    },
    touchAfter : 24 * 3600 //now the session will be updated after 24 hr 
});
const sessionOptions = {
    store,
    secret : "ArjumanThisSide",
    resave : false,
    saveUninitialized  : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }
}

// middleware setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.user = req.user;
    next();
});



// importing routes
app.use("/listings",listings);
app.use("/listings/:id/review",review);
app.use("/",user);
// ends here




// Error handling
app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let{status = 500,message= "something went wrong"} = err;
    res.status(status).render("error.ejs", {message });
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});

