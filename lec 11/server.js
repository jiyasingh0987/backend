const express=require("express");
const app=express();
const port=3000;

app.use(express.json());
app.get("/",(req,res)=>{
   //console.log("request URL:",req.url);
   //console.log("request method:",req.method);
   //console.log("request headers:",req.headers);
    console.log("request query:",req.query);
    res.send("Welcome to the home page");
})

app.post("/",(req,res)=>{
    console.log("request URL:",req.url);
    console.log("request method:",req.method);
    console.log("request body:",req.body);
    res.send("Welcome to the home page");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})