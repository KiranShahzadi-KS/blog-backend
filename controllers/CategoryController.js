const Category = require("../models/Category");

//create category

const createCategory = async(req, res)=>{
    //find if category already exist
    let category = await Category.findOne({categoryName:req.body.categoryName.toLowerCase()});
    
    if(category == null){
        await Category.create({
            categoryName:req.body.categoryName.toLowerCase()
        });
        res.json({
            success:true,
            message: 'category created successfullly!'
        })
    }else {
        res.json({
            success:false,
            message: 'category already exist!'
        })
    }
}

const getAllCategories = async(req,res)=>{
    let categories = await Category.find({});
    res.json({
        success:false,
        message: 'category fetch successfullly!',
        data:categories
    })
}


const updateCategory = async(req,res)=>{
    await Category.findByIdAndUpdate(req.body.category_id,{
        categoryName:req.body.categoryName
    }); 
    res.json({
        success:true,
        message: 'category update uccessfullly!'
    })
}


const deleteCategory = async(req,res)=>{
    await Category.findByIdAndDelete(req.params.id)

res.json({
    success:true,
    message: 'category deleted successfullly!'
})
}

module.exports={
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
}