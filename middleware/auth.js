const {verify}=require("jsonwebtoken")


module.exports={
    checkAuth:(req,res,next)=>{
        let token=req.get("authorization")
       
        if(token==null){
            res.json({
                error:"Please provide a token"
            })
        }
        token=token.slice(7)
        verify(token,"qwe1234",(err,result)=>{
            if(err){
res.json({
    error:"Invalid Token"
})
            }else{
                next()
            }
        })
    }
}