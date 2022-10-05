const isAuth=(req,res,next)=>{
    const role="user"
    if(role=="admin"){
        next()
    }
    else{
        res.status(401).send({msg:"not auth"})
    }
}

module.exports=isAuth