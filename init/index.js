const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}

main()
.then(()=>{
    console.log("connection successful with mongodb");
})
.catch((err)=>{
    console.log(err);
})
async function insert(){
    await Listing.deleteMany();
    initData.data = initData.data.map((obj)=>({...obj,owner : "6842e73d0f3fab2b983031b1",geometry : {type : 'Point',coordinates : [77.209006, 28.613895]}}));
   let res =  await Listing.insertMany(initData.data);

   return res;
}
insert().then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});