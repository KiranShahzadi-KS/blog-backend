const Post = require("../models/Post")

//create post
const createPost = async(req, res)=>{
    try{
    // console.log(req.file)
    // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    // console.log(req.body)
    await Post.create({
        title:req.body.title,
        body:req.body.body,
        auther:req.body.auther,
        category:req.body.category,
        image:"upload/"+req.file.filename
    });
    res.json({
        'message': 'Post stored successfully!'

    })
}
catch(error){
    res.json({
        success:false,
        error:error
    })
}

}



//User get by  id
const getpostbyId = async(req, res) =>{
    const post = await Post.findById(req.params.id);

    res.json({
        success:true,
        'message': 'Get Post successfully',
        'data': post
    })
}

//update Post
const updatePost = async(req, res)=>{
    let updatedImage = req.body.existingImage;
    if(updatedImage == "" || updatedImage == null){
        updatedImage = "upload/"+req.file.filename;
    }
    
    await Post.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        body:req.body.body,
        auther:req.body.auther,
        category:req.body.category,
        image:updatedImage
    }); 
    res.json({
        
        message: 'Post update successfullly!'
    })
}

//get all Post
const getallPosts = async(req, res) =>{
    const result = await Post.find({}); 
    res.json({
        'message': 'Fetch all posts',
        'data' : result
    })
}


//delete post
const deletePost = async(req, res)=>{
    await User.findByIdAndRemove(req.params.id);

    res.json({
        'message': 'Post deleted',
    })
}







module.exports = {
    createPost,
    getpostbyId,
    updatePost,
    getallPosts,
    deletePost
}