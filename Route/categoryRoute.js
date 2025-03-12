const express= require('express')
 const app=express()
 const router=express.Router()
 const CONTROLLER=require('../controller/CategoryController')
 const MEALROUTE=require('./MealRoute ')

const { addCategoryVilidator, getCategoryVilidator, updateCategoryVilidator, deleteCategoryVilidator } = require('../Utlis/Validator/CategoryValidator')





 router.route('/')
 .get(CONTROLLER.getAllCategories)
 .post(CONTROLLER.addCategory)


 router.route('/:id')
 .get(getCategoryVilidator,CONTROLLER.getCategory)
 .patch(updateCategoryVilidator,CONTROLLER.updateCategory)
 .delete(deleteCategoryVilidator,CONTROLLER.deleteCategory)

 router.use('/:categoryId/meals',MEALROUTE)



 module.exports=router




 