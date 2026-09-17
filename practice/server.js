// // crud practice
// const express = require("express");
// const app = express();

// const PORT = 3000;
// app.use(express.json());

// const Students = [
//     { rollNo: 1, name: "Abhijeet", section: "BCA-D" },
//     { rollNo: 2, name: "Upen", section: "BCA-D" }];

//     app.get("/students", (req, res) => { 
//         res.json(Students);
//     });

//     // Read operation with id
// app.get("/students/:rollNo", (req, res) => {
//     const id = req.params.rollNo;
//     const student = students.find(s => s.rollNo === parseInt(id));
//     if (!student) {
//         return res.status(404).json({ error: "Student not found" });
//     }
//     res.json(student);
// });

// //create operation

// app.post("/students", (req, res) => {
//    const data = req.body;
//    students.push(data);
//    res.json({ student: true, data });
// });


// //update operation
// app.put("/students/:rollNo", (req, res) => {
//     const id = req.params.rollNo;
//     const data = req.body;
//     const student=students.find((student) => student.rollNo === Number(id));
//     if (!student) {
//       res.status(404).json({ success: false, message: "Student not found" });
//     }
//     student.name = data.name;
//     student.section = data.section; 
//     res.json({ success:true, student });
// });

//     // detele operation
//     app.delete("/students/:rollNo", (req, res) => {
//         const id = req.params.rollNo;
//         const studentIndex = students.findIndex((student) => student.rollNo === Number(id));
//         if (studentIndex === -1) {
//             res.status(404).json({ success: false, message: "Student not found" });
//         } else {
//         students.splice(studentIndex, 1);
//         res.json({ success: true, message: "Student deleted successfully" });

// }});
// app.listen(PORT, () => console.log("server is running"));

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


const express = require('express');
// const morgan = require('morgan');
const app = express();
const PORT = 3000;


const logmiddleware = (req, res, next) => {
    // console.log("hello from middleware");
    // req.name = "abhijeet";
    console.log("Req url:", req.url, "Time:", new Date().toLocaleString());
    // res.send("hello from middleware");
    next();

}

const authMiddleware = (req, res, next) => {
    console.log("Authentication successful  ");
    next();
}

// // app.use(morgan("dev"));
// app.use(morgan("combined"));
// app.use(authMiddleware);
app.use(logmiddleware);

app.get("/", (req, res) => {
    console.log("homepage");
    res.send("hello from get request");
})

app.get("/about", authMiddleware, (req, res) => {
    console.log("about page");
    res.send("hello from about page");
})

app.listen(PORT, () => console.log("server is running"));          
