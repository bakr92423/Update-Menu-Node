const mongoose =require('mongoose')
const MEAL= require('../Schema/MealSchema')
const express= require('express')
  




const addMeal= async(req,res)=>{

    const newMeal= new MEAL(req.body)
       await newMeal.save()

       res.status(200).json({result:newMeal.length,status:'تم الاضافة بنجاح',data:newMeal})

}

const getMeal= async(req,res)=>{
    const id =req.params.id
    const meal= await MEAL.findById(id)

    if(meal){

        res.status(200).json({result:meal.length,status:'تم  ',data:meal})
    }else{
        res.status(500).json({status:'هذه الوجبة غير موجوده  ',data:meal})

    }
}
const getAllMeals= async(req,res)=>{
    let limit=req.query.limit
    let page=req.query.page
    let skip=(page - 1)* limit

    let filterObject={}

    if(req.params.categoryId) filterObject={category:req.params.categoryId}
    
    let mongooseQuery=  MEAL.find(filterObject).limit(limit).skip(skip).populate({path:'category',select:'name -_id'})

    if(req.query.keyWord){

        query={}
        query.$or=[
            {name:{$regex:req.query.keyWord,$options:'i'}},
            {description:{$regex:req.query.keyWord,$options:'i'}}
        ]
        mongooseQuery=mongooseQuery.find(query)
    }


    const meals= await mongooseQuery

    if(meals){

        res.status(200).json({result:meals.length,status:'تم  ',data:meals})
    }else{
        res.status(500).json({result:meals.length,data:'لايوجد نتائج'})

    }
}

const updateMeal=async(req,res)=>{

    const id =req.params.id
    

    const checkMeal= MEAL.findById(id)

    if(checkMeal){

        const updatedMeal= await MEAL.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(200).json({status:'تم التعديل بنجاح  ',data:updatedMeal})
    }else{
        res.status(500).json({data:'لايوجد نتائج'})

    }


}


const deleteMeal= async(req,res)=>{

    const id =req.params.id

     await MEAL.findByIdAndDelete(id)
    res.status(200).json({status:'تم الحذف بنجاح  '})

    
}



module.exports={
    addMeal,
    getMeal,
    getAllMeals,
    updateMeal,
    deleteMeal
}