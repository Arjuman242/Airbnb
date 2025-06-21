const Review = require("../models/reviews");
const Listing = require("../models/listing");
module.exports.addReview = async (req,res)=>{
    let {id} = req.params;
    let review = req.body.review;
    
    let listing = await Listing.findById(id);
    let newReview = new Review(
        review
    );
    newReview.author = req.user._id;
   
    listing.reviews.push(newReview);
    await newReview.save();
    

    await listing.save();
    req.flash("success","the review has been added");
    
    res.redirect(`/listings/${id}/show`);

};
module.exports.destroyReview = async(req,res)=>{
    let{id,reviewId} = req.params;
    

    await Listing.findByIdAndUpdate(id,{ $pull : {reviews : reviewId}});

    await Review.findByIdAndDelete(reviewId);
    req.flash("success","review has been successfully deleted");
    res.redirect(`/listings/${id}/show`);

};