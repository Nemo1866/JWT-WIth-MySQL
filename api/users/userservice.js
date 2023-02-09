const connection=require("./../../connections/database")


module.exports={
    createUser:(data,callback)=>{
        connection.query("Insert into users(first_name,last_name,email,password,number) values(?,?,?,?,?)",[data.first_name,data.last_name,data.email,data.password,data.number],(err,results,field)=>{
            if(err){
                return callback(err)
            }else{
                return callback(null,results)
            }
        })
    },getAllUsers:(callback)=>{
        connection.query("Select * from users",[],(err,results,field)=>{
            if(err){
                return callback(err)
            }else{
                return callback(null,results)
            }
        })
    },getUserById:(id,callback)=>{
        connection.query("Select * from users where id =?",[id],(err,results,field)=>{
            if(err){
                return callback(err)
            }else{
                return callback(null,results)
            }
        })
    },updateUser:(data,callback)=>{
        connection.query("Update users set first_name=?,last_name=?,email=?,password=?,number=? where id =?",[data.first_name,data.last_name,data.email,data.password,data.number,data.id],(err,results,field)=>{
            if(err){
                return callback(err)
            }else{
                return callback(null,results)
            }
        })
    },deleteUser:(id,callback)=>{
        connection.query("delete from users where id =?",[id],(err,results,field)=>{
            if(err){
                return callback(err)
            }else{
                return callback(null,results)
            }
        })
    },login:(email,callback)=>{
connection.query("Select * from users where email=?",[email],(err,result,field)=>{
    if(err){
        return callback(err)
    }
    return callback(null,result[0])
})
    }
}