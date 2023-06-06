const mongoose =  require("mongoose");
const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Title is required"]
    },

    image:{
        type:String,
        required:[true, "Blog image required"]
    },
    body:{
        type:String,
        required:[true, "Blog body is required"]
    },
    auther:{
        type:String,
    },
    category:{
        type:String,
    },
    is_publish:{
        type:Boolean,
        default:false
    },
    is_approvedByAdmin:{
        type:Boolean,
        default:false
    }

},{timestamps:true});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;