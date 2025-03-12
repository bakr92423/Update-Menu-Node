 const express= require('express')
 const app=express()
  const mongoose =require('mongoose')
  const dotenv= require('dotenv')
  dotenv.config({path:'config.env'})
  const CATEGORYROUTE=require('./Route/categoryRoute')
  const MEALROUTE=require('./Route/MealRoute ')
    const UPLOAD=require('./Route/upload')
   const cors= require('cors')
   const path= require('path')

   app.use(cors())
app.use(express.json())

app.use("/images", express.static(path.join(__dirname, "images")));






app.use('/api/category',CATEGORYROUTE)
app.use('/api/meal',MEALROUTE)
app.use('/api/upload',UPLOAD)



app.all('*',(req,res,next)=>{

   res.status(404).json('يتعذر الوصول الي هذه الصفحه')
})












 const URL =process.env.DATABASE_URL
 


mongoose.connect(URL).then(()=>{
    console.log('conecting data base');
    
 })


 app.listen(5000,(req,res)=>{

    console.log('the server starting');
    
 })


 

 