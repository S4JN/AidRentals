const userModel=require("../models/userSchema");


const getOwnerDetails=async(req,res)=>{
    const id=req.body;
    const {data}=await userModel.find({_id:id});
    console.log(data);
    res.send(data);
}

module.exports=getOwnerDetails