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
   let today = new Date();
   let dd = today.getDate();
   let mm = today.getMonth()+1;
   let yyyy = today.getFullYear();
   let formattedToday = `${dd}/${mm}/${yyyy}`;
   console.log(today);
   meal.find({date:formattedToday}).then((x)=>{
      console.log(x);
      console.log(x[0]);
    res.render("menu",{Day:"Today",breakfast:x[0].name.breakfast,lunch:x[0].name.lunch,snacks:x[0].name.snacks,dinner:x[0].name.dinner});
   }).catch((err)=>console.log(err))
})
app.get('/tomorrow-mess-menu',(req,res)=>{
  let tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);;
  let tomorrowdd = tomorrow.getDate();
  let tomorrowmm = tomorrow.getMonth()+1;
  let tomorrowyyyy = tomorrow.getFullYear();
  let formattedtomorrow = `${tomorrowdd}/${tomorrowmm}/${tomorrowyyyy}`;
  meal.find({date:formattedtomorrow}).then((x)=>{
     console.log(x);
     console.log(x[0]);
   res.render("menu",{Day:"Tomorrow",breakfast:x[0].name.breakfast,lunch:x[0].name.lunch,snacks:x[0].name.snacks,dinner:x[0].name.dinner});
  }).catch((err)=>console.log(err))
})
app.listen(process.env.PORT||3000,()=>console.log(`Server started on port ${process.env.PORT}`));




