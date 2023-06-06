const express = require("express");
const router = express.Router();
const {createCategory,getAllCategories,updateCategory,deleteCategory} = require("../controllers/CategoryController");
const {createUser,getbyId,updateUser,getallUsers,deleteUser} = require("../controllers/UserController");
//define all routes

//category routes
router.post("/store/category", createCategory)
router.get("/get/categories", getAllCategories)
router.post("/update/category", updateCategory)
router.get("/delete/category/:id", deleteCategory)


//user routes
router.post("/user", createUser)
router.get("/user/:id", getbyId)
router.post("/user/update", updateUser)
router.get("/users", getallUsers)
router.get("/user/delete/:id",deleteUser)

module.exports = router;