require("dotenv").config()
const mysql=require("mysql2")
let mySqlConnection=mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database:process.env.DATABASE
})
mySqlConnection.connect(err=>{
    if(err){
        console.log(err);
    }else{
        console.log("Connected to MySQL");
    }
})
module.exports=mySqlConnection