const router=require("express").Router()
const {createUser,getAllUsers,getUserById,updateUser,deleteUser,login}=require("./usercontroller")
const {checkAuth}=require("./../../middleware/auth")

router.post("/",checkAuth,createUser)
router.get("/",checkAuth,getAllUsers)
router.get("/:id",checkAuth,getUserById)
router.delete("/:id",checkAuth,deleteUser)
router.patch("/",checkAuth,updateUser)
router.post("/login",login)
module.exports=router