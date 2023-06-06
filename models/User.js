const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"First name is required"]
    },
    last_name:{
        type:String,
        required:[true,"Last name is required"]
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:[true,"Email name is required"]
    },
    password:{
        type:String,
        required:[true,"Password name is required"]
    },
    role:{
        type:String
    },
    profile:{
        type:String
    }
},{timestamps:true});

const User = mongoose.model("User", UserSchema);

module.exports = User;