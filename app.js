const express=require("express");
const bodyParser=require("body-parser");

const app=express();
let items=[];
let workitems=[];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today=new Date();
    let day=today.toLocaleDateString("hi-IN", options);
 
    
        res.render("list",{listTitle:day,newListItem:items});

    
});


app.post("/",function(req,res){
   // console.log(req.body);
    let item=req.body.newitem;
    if(req.body.list==="Work"){
        
        workitems.push(item);
        res.redirect("/work");

    }
    else{
        items.push(item)
        res.redirect("/");

    }
  
   
    //console.log(item);

})


app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",newListItem:workitems});

})

app.post("/work",function(req,res){
    let item=req.body.newitem;
    workitems.push(item);
   res.redirect("/work");

})

app.get("/about",function(req,res){
    res.render("about");
})



app.listen(3000,function(){
    console.log("you server started at port 3000");
})