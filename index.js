const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = 5000;
const app = express();

app.use(express.static('./public'));     
const path_second = path.join(__dirname, "./source/views");
const partial__path = path.join(__dirname, "./source/partials");
app.set("view engine", "hbs");    
app.set("views", path_second); 
hbs.registerPartials(partial__path);     
         
    
 app.get("/",(req,res)=>{ 
    res.render("index");        
 });           
    
 app.get("/contact",(req,res)=>{   
   res.render("contact"); 
 }); 
 app.get("/registration",(req,res)=>{ 
  res.render("index"); 
});   

 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  }); 