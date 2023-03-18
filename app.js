const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
//
app.listen(process.env.PORT||3000,()=>console.log("Server started on port 3000"));
//
 mongoose.connect(`mongodb+srv://Apurv:YukZV8WPzzJCS1G4@cluster0.hl6wk8j.mongodb.net/MealDB`);

app.get('/',(req,res)=>{
   const today = new Date().toLocaleString().split(',')[0];
   meal.find({date:today}).then((x)=>{
    res.render("home",{breakfast:x[0].name.breakfast,lunch:x[0].name.lunch,snacks:x[0].name.snacks,dinner:x[0].name.dinner});
   }).catch((err)=>console.log(err))
})



