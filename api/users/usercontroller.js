const {createUser,getAllUsers,getUserById,updateUser,deleteUser,login}=require("./userservice")
const {genSaltSync,hashSync,compareSync}=require("bcrypt")
const {sign}=require("jsonwebtoken")

module.exports={
    createUser:(req,res)=>{
        let body=req.body
        let salt=genSaltSync(10)
        body.password=hashSync(body.password,salt)
        createUser(body,(err,result)=>{
            if(err){
                return res.json({
                    error:"Something Went Wrong in Database"
                })
            }
            return res.json({
                data:"User Added Sucessfully"
            })
        })
    },getAllUsers:(req,res)=>{
        getAllUsers((err,result)=>{
            if(err){
                return res.json({
                    error:"Couldn't get all the users"
                })
            }
            return res.json({
                data:result
            })
        })
    },getUserById:(req,res)=>{
        let id=req.params.id
        getUserById(id,(err,result)=>{
            if(err){
                return res.json({
                    error:"Couldn't Get the user"
                })
            }
            return res.json({
                data:result
            })
        })
    },updateUser:(req,res)=>{
        let body=req.body
        let salt=genSaltSync(10)
        body.password=hashSync(body.password,salt)
        updateUser(body,(err,result)=>{
            if(err){
                return res.json({error:"Could not update the user currently"+err})
            }
            if(!result){
                return res.json({
                    error:"User is not available"
                })
            }
            return res.json({
                data:"Updated Sucessfully"
            })
        })
    },deleteUser:(req,res)=>{
        let id=req.params.id
        deleteUser(id,(err,result)=>{
            if(err){
                return res.json({
                    error:"Could not delete the user"
                })

            }
            return res.json({
                data:"Sucessfully Deleted the user"
            })
        })
    },login:(req,res)=>{
        let body=req.body
        login(body.email,(err,result)=>{
            if(err){
                return res.json({
                    error:"email id or password is incorrect"
                })
            }
            let validate=compareSync(body.password,result.password)
            if(!validate){
                return res.json({
                    error:"Invalid password try again"
                })
            }
            if(validate){
                result.password=undefined
                let token=sign({validate:validate},"qwe1234",{expiresIn:"1h"})
                return res.json({
                    token:token
                })
            }

        })
    }
}