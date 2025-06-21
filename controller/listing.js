const Listing= require("../models/listing.js");
const map_token = process.env.MAP_TOKEN;
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: map_token });
module.exports.create = (req, res) => {
    res.render("listing/create");
};
module.exports.submitCreated = async (req, res) => {
    // for geocoding
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
    .send()
    // ends here

    
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;
    await newListing.save();
    
    

    req.flash("success","listing saved successfully");
    res.redirect("/listings");
};
module.exports.index = async (req, res) => {
    const data = await Listing.find({});
    res.render("listing/index", {data});
};
module.exports.show = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews", populate : {path : "author"}}).populate("owner");
    if(!listing){
        req.flash("error","the Listing does not exist");
        return res.redirect("/listings");
    }
    res.render("listing/details", {listing : listing});
};
module.exports.edit = async (req, res) => {
    
    let {id} = req.params; 
    let listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error","listing does not exist");
        return res.redirect("/listings");
    }
    let orignalImageUrl= listing.image.url;
    orignalImageUrl  = orignalImageUrl.replace("/upload/", "/upload/w_200,h_200/");

    res.render("listing/edit", {listing,orignalImageUrl});
};
module.exports.update = async (req, res) => {
    let {id} = req.params;
 
   let listing =  await Listing.findByIdAndUpdate(id, {...req.body.listing});
   if(typeof req.file !== "undefined"){
   let url = req.file.path;
   let filename  = req.file.filename;
   listing.image = {url,filename};
   await listing.save();
   }

    req.flash("success","Listings has been updated");
    res.redirect("/listings");
};
module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing has been deleted");
    res.redirect("/listings");
};
