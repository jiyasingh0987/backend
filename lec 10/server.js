const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const students = [
    { rollNo: 1, name: "Abhijeet", section: "BCA-D" },
    { rollNo: 2, name: "Upen", section: "BCA-D" },
    { rollNo: 3, name: "Rahul", section: "BCA-D" },
    { rollNo: 4, name: "Gurpreet", section: "BCA-D" },
    { rollNo: 5, name: "Daulat", section: "BCA-D" }
];

// Read Operation
app.get("/students", (req, res) => {
    res.json(students);
});

// Read operation with id
app.get("/students/:rollNo", (req, res) => {
    const id = req.params.rollNo;
    const student = students.find(s => s.rollNo === parseInt(id));
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
});

//create operation

app.post("/students", (req, res) => {
   const data = req.body;
   students.push(data);
   res.json({ student: true, data });
});


app.listen(PORT, () => console.log("server is running"));