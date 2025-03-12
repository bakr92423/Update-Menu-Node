const mongoose =require('mongoose')
const CATEGORY= require('../Schema/CategorySchema')
const express= require('express')




const addCategory= async(req,res)=>{

    const newCategory= new CATEGORY(req.body)
       await newCategory.save()

       res.status(200).json({result:newCategory.length,status:'تم الاضافة بنجاح',data:newCategory})

}

const getCategory= async(req,res)=>{
    const id =req.params.id
    const category= await CATEGORY.findById(id)

    if(category){

        res.status(200).json({result:category.length,status:'تم  ',data:category})
    }else{
        res.status(500).json({status:'هذه الفئة غير موجوده  ',data:category})

    }
}
const getAllCategories= async(req,res)=>{
    
    const categories= await CATEGORY.find()

    if(categories){

        res.status(200).json({result:categories.length,status:'تم  ',data:categories})
    }else{
        res.status(500).json({result:categories.length,data:'لايوجد نتائج'})

    }
}

const updateCategory=async(req,res)=>{

    const id =req.params.id
    const name=req.body.name

    const checkCategory= CATEGORY.findById(id)

    if(checkCategory){

        const updatedCategory= await CATEGORY.findOneAndUpdate({_id:id},{name},{new:true})
        res.status(200).json({status:'تم التعديل بنجاح  ',data:updatedCategory})
    }else{
        res.status(500).json({data:'لايوجد نتائج'})

    }


}


const deleteCategory= async(req,res)=>{

    const id =req.params.id

     await CATEGORY.findByIdAndDelete(id)
    res.status(200).json({status:'تم الحذف بنجاح  '})

    
}



module.exports={
addCategory,
getCategory,
getAllCategories,
updateCategory,
deleteCategory
}