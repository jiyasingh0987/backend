const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentcontroller");

router.get("/", studentController.getstudents);
router.get("/:rollNo", studentController.getStudentById);
router.post("/", studentController.createStudent);
router.put("/:rollNo", studentController.updateStudent);
router.delete("/:rollNo", studentController.deleteStudent);

module.exports = router;