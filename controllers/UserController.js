const User = require('../models/User');

//create user

const createUser = async(req, res)=>{
        await User.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password,
        // role:"admin",
        profile:process.env.AVATAR_IMG
    });
    res.json({
        'message': 'use recoed stored successfully!'

    })
}

//User get by  id
    const getbyId = async(req, res) =>{
    const user = await User.findById(req.params.id);

    res.json({
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