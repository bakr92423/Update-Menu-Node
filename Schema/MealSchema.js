const mongoose =require('mongoose')




const mealSchema= new mongoose.Schema({

    name:{
        type:String,
        required:[true,'the name is required'],
        unique:[true,'the categoryName must be unique'],
        trim:true
    },
    price:{
        type:Number,
        required:[true,'the price is required'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'the description is required'],
        trim:true
    },
    image:{
        type:String,
     
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:'category',
        required:[true,'the category is required'],
    }

},{timestamps:true})



module.exports=mongoose.model('meal',mealSchema)