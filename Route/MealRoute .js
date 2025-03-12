const express= require('express')
 const app=express()
 const router=express.Router({mergeParams:true})
 const MEALCONTROLLER=require('../controller/MealController')
const { addMealVilidator, updateMealVilidator } = require('../Utlis/Validator/MealValidator')






 router.route('/')
 .get(MEALCONTROLLER.getAllMeals)
 .post(addMealVilidator,MEALCONTROLLER.addMeal)


 router.route('/:id')
 .get(MEALCONTROLLER.getMeal)
 .patch(updateMealVilidator,MEALCONTROLLER.updateMeal)
 .delete(MEALCONTROLLER.deleteMeal)



 module.exports=router




 