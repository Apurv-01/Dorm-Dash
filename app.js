const express = require('express');
const app = express();
app.use(express.static( 'public'));

const mongoose = require('mongoose');
app.set('view engine', 'ejs');
//
//
 mongoose.connect(`mongodb+srv://Apurv:YukZV8WPzzJCS1G4@cluster0.hl6wk8j.mongodb.net/MealDB`,
 {
   useNewUrlParser: true
 }).then(()=>console.log("connected to mongoose"));
 const mealSchema = mongoose.Schema({
   name:Object,
   date:String
   
})
const meal = mongoose.model('meal',mealSchema);

app.get('/',(req,res)=>{
  res.render("landing");
})
app.get('/mess-menu',(req,res)=>{
   const today = new Date();
   const dd = today.getDate();
   const mm = today.getMonth()+1;
   const yyyy = today.getFullYear();
   const formattedToday = `${dd}/${mm}/${yyyy}`;
   console.log(today);
   meal.find({date:formattedToday}).then((x)=>{
      console.log(x);
      console.log(x[0]);
    res.render("menu",{breakfast:x[0].name.breakfast,lunch:x[0].name.lunch,snacks:x[0].name.snacks,dinner:x[0].name.dinner});
   }).catch((err)=>console.log(err))
})
app.listen(process.env.PORT||3000,()=>console.log(`Server started on port ${process.env.PORT}`));




