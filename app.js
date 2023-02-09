const express=require("express")
const app=express()
const router=require("./api/users/userroute")

app.use(express.json())

app.use("/api/users",router)

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})