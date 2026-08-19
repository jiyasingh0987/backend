const express=require('express');

const app=express();

const users=[
    {id:1, name:"John",email:"john@example.com"},
    {id:2, name:"Jane",email:"jane@example.com"},
    {id:3, name:"Bob",email:"bob@example.com"}
];  

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>Welcome to About Page</h1>");
}   );

app.get("/contact",(req,res)=>{
    res.send("<h1>Welcome to Contact Page</h1>");
});

app.get("/users",(req,res)=>{
    res.json(users);
});

app.listen(3000,()=>console.log("Server is running on port 3000"));