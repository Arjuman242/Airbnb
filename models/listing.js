const mongoose = require("mongoose");
const Review = require("./reviews");
const listing = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        
    },
    description : {
        type : String
        
    },
    image : {
        url  : String,
        filename : String
    },
    price : {
        type : Number,
       
    },
    location : {
        type : String,
       
    },
    country : {
        type : String,
        
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },

    geometry : {
        type : {
            type : String,
            enum : ['Point'],
            required : true
        },
        coordinates : {
            type : [Number],
            required : true
        }
        
    }
});
const Listing = new mongoose.model("Listing",listing);
module.exports = Listing;