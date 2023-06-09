const { response } = require("express");
const Post = require("../models/Post");

const publish = async (req, res) =>{
    await Post.findByIdAndUpdate(req.params.id,{
        is_publish:true
    });
    res.json({
        success:true,
        message:"post publisg successfully"
    });
}


const unpublish = async (req,res) =>{
    await Post.findByIdAndUpdate(req.params.id,{
        is_publish:false
    });
    res.json({
        success:true,
        message:"post unpublish"
    });
}

const approvedByAdmin = async (req, res) =>{
    await Post.findByIdAndUpdate(req.params.id,{
        is_approvedByAdmin:true
    });
    res.json({
        success:true,
        message:"post approved successfully"
    });
}

module.exports = {
    publish,
    unpublish,
    approvedByAdmin
}