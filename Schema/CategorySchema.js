const mongoose =require('mongoose')




const categorySchema= new mongoose.Schema({

    name:{
        type:String,
        required:[true,'the name is required'],
        unique:[true,'the categoryName must be unique'],
        trim:true
    }
},{timestamps:true})



module.exports=mongoose.model('category',categorySchema)