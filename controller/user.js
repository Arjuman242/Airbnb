const User = require("../models/user");
module.exports.signupForm = (req,res)=>{
    res.render("users/signup");
};
module.exports.signupSubmit = async(req,res, next)=>{
    try{
        const {username, email, password} = req.body;
        const newUser = new User({
            email: email,
            username: username
        });
        const user = await User.register(newUser, password);
        req.login(user,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","you are logged in successfully");
            res.redirect("/listings");
        });
    }catch(err){
        req.flash("error",err.message);
        return res.redirect("/signup");
    }
};
module.exports.loginForm = (req,res)=>{
    res.render("users/login");
};
module.exports.loginSubmit = async(req,res)=>{
    req.flash("success","you are logged in successfully");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    
    res.redirect(redirectUrl);
};
module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
            req.flash("error","try again to logout");
            return next(err);
        }
        req.flash("success","loggedout successfully");
        res.redirect("/listings");
    })
};
