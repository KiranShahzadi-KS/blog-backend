const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

    const createWebToken = async (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET);
}

//create user
    const createUser = async(req, res)=>{
        try {

        let salt = await bcrypt.genSalt();
        let encrypt_password = await bcrypt.hash(req.body.password,salt);
        let user =    await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:encrypt_password,
            role:"user",
            profile:process.env.AVATAR_IMG
        });
        let jwttoken = await createWebToken(user._id);
        res.json({
            success:true,
            token:jwttoken,
            'message': 'user record stored successfully!'
    
        });
    
} catch (error) {
    res.json({
        success:false,
        'message': error
    })
}
}
    

//User get by  id
    const getbyId = async(req, res) =>{
    const user = await User.findById(req.params.id);

    res.json({
        success:true,
        'message': 'user data fetch successfully',
        'data': user
    })
}

//update user
const updateUser = async(req, res)=>{
    await User.findByIdAndUpdate(req.body.user_id,{
        email:req.body.email,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password,
        profile:req.body.AVATAR_IMG
    }); 
    res.json({
        
        message: 'User update successfullly!'
    })
}

//get all user
const getallUsers = async(req, res) =>{
    const result = await User.find({}); 
    res.json({
        'message': 'user data fetch successfully',
        'data' : result
    })
}


//delete user
const deleteUser = async(req, res)=>{
    await User.findByIdAndRemove(req.params.id);

    res.json({
        'message': 'user deleted',
    })
}



module.exports = {
    createUser,
    getbyId,
    updateUser,
    getallUsers,
    deleteUser
}