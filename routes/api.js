const express = require("express");
const router = express.Router();
const {createCategory,getAllCategories,updateCategory,deleteCategory} = require("../controllers/CategoryController");
const {createUser,getbyId,updateUser,getallUsers,deleteUser} = require("../controllers/UserController");
const {createPost, getpostbyId,updatePost,getallPosts, deletePost} = require("../controllers/PostController");
const{authToken} = require("../middlerware/Auth");
const{login} = require("../controllers/AuthController");
const{updateUserProfile} = require("../controllers/ProfileController");
const{publish, unpublish, approvedByAdmin} = require("../controllers/PublishController");


//image upload //upload file

const multer = require("multer");

var Storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "public/upload/");
    },
    filename: function (req, file, cb){
        var datetime = Date.now();
        cb(null, datetime + "-" + file.originalname);
    },
});
    var upload = multer({ storage: Storage });



//define all routes

//category routes
router.post("/store/category", authToken, createCategory)
router.get("/get/categories", getAllCategories)
router.post("/update/category",authToken, updateCategory)
router.get("/delete/category/:id",authToken, deleteCategory)


//user routes
router.post("/user", createUser)
router.get("/user/:id", authToken, getbyId)
router.post("/user/update",authToken, updateUser)
router.get("/users",authToken, getallUsers)
router.get("/user/delete/:id",authToken, deleteUser)


//post routers
router.post("/createPost", upload.single("image"),createPost);
router.get("/post/:id", authToken, getpostbyId)
router.post("/post/update/:id", upload.single("image"), updatePost)
router.get("/posts", getallPosts)
router.get("/post/delete/:id",authToken, deletePost)


//login router //auth routes
router.post("/user/login", login);

//update user profile
router.post("/update/user/profile/:id", upload.single("image"), updateUserProfile)

//post publish

router.get("/publish/post/:id", publish);
router.get("/unpublish/post/:id", unpublish);
router.get("/post/approved/:id",approvedByAdmin);

module.exports = router;