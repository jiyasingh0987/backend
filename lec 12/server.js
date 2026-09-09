const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentsRoute");


// const router=express.Router();
// const students = require("./data/studentdata");
// const studentController = require("./controller/studentcontroller");


const PORT = 3000;
app.use(express.json());
app.use("/students", studentRoutes);

// const students = [
//     { rollNo: 1, name: "Abhijeet", section: "BCA-D" },
//     { rollNo: 2, name: "Upen", section: "BCA-D" },
//     { rollNo: 3, name: "Rahul", section: "BCA-D" },
//     { rollNo: 4, name: "Gurpreet", section: "BCA-D" },
//     { rollNo: 5, name: "Daulat", section: "BCA-D" }
// ];

// Read Operation
// app.get("/students", studentController.getstudents);

// // Read operation with id
// app.get("/students/:rollNo", studentController.getStudentById);

// //create operation
// app.post("/students", studentController.createStudent);

// //update operation
// app.put("/students/:rollNo", studentController.updateStudent);

// //delete operation
// app.delete("/students/:rollNo", studentController.deleteStudent);

app.listen(PORT, () => console.log("server is running"));