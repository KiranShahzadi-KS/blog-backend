const mongoose = require("mongoose");

const CategoryScheme = new mongoose.Schema({
   categoryName:{
    type:String
   } 
},{timestamps:true});

const Category = mongoose.model("Category", CategoryScheme);

module.exports = Category;