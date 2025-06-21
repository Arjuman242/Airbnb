const Listing = require("./models/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema,reviewSchema} = require("./schema.js");
const Review = require("./models/reviews.js");


const isLoggedin = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must login to make changes");
        return res.redirect("/login");
    }
    next(); 
};

const saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}
const isOwner = async (req,res,next)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.user._id)){
        req.flash("error","you are not the owner of the listing you cant update it ");
        return res.redirect(`/listings/${id}/show`);
    }
    next();
}
const validateListing = (req,res,next)=>{
   
        let {error} = listingSchema.validate(req.body);
       
        if(error){
            let errMsg = error.details.map((el)=>el.message).join(",");
            throw new ExpressError(400,errMsg);
        }else{
            next();
        }
    }
const validateReview = (req,res,next)=>{
    
   
    let{error} = reviewSchema.validate(req.body);
      
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError((400),errMsg);
    }else{
        next();
    }
    
 }
 const isReviewOwner = async(req,res,next)=>{
    let{id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.user._id)){
        req.flash("error","you dont have permission ");
        return res.redirect(`/listings/${id}/show`)
    }
    next();

 }

  
    
    

module.exports = {isLoggedin, saveRedirectUrl,isOwner,validateListing,validateReview,isReviewOwner};