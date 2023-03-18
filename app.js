const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
//
app.listen(process.env.PORT||3000,()=>console.log("Server started on port 3000"));
//
 mongoose.connect(`mongodb+srv://Apurv:YukZV8WPzzJCS1G4@cluster0.hl6wk8j.mongodb.net/MealDB`);
 const mealSchema = mongoose.Schema({
   name:Object,
   date:String
   
})

const meal = mongoose.model('meal',mealSchema);
const meal1 = new meal({
   name:{
     breakfast:["TEA","POORI","SUBZI","PICKLE"],
     lunch:["OKRA KADHI","ALOO MATAR","RICESALAD","CHAPATI","PICKEL"],
     snacks:["Tea","Chips"],
     dinner:["Rice","Chapati","Paneer Methi Matar","Kadhai Chicken","Lobiya Dal"]
   },
   date: new Date(2023,2,17).toLocaleString().split(',')[0]})

   const meal2 = new meal({
     name:{
       breakfast:["TEA","PAV BHAJI","MILK","PICKLE"],
       lunch:["DAL MAKHAN","KADAI VEG",
        "BOONDI RAITA","PICKEL"],
       snacks:["Tea","Sweet Roll"],
       dinner:["Matar Rice","Chapati","Rajma","Aloo Cabbage Matar","Kheer"]
     },
     date: new Date(2023,2,18).toLocaleString().split(',')[0]
})
// meal1.save();
// meal2.save();
app.get('/',(req,res)=>{
   const today = new Date().toLocaleString().split(',')[0];
   meal.find({date:today}).then((x)=>{
    res.render("home",{breakfast:x[0].name.breakfast,lunch:x[0].name.lunch,snacks:x[0].name.snacks,dinner:x[0].name.dinner});
   })
})



