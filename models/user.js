const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
//   username and password will automatically be created by  passport local mongoose
    email : {
       type : String,
       required  : true,
    },
    
});
UserSchema.plugin(passportLocalMongoose);//username,hashing,salting,hash password handles automatically
const User = new mongoose.model("User",UserSchema);
module.exports = User;