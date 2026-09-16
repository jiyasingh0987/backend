const express = require('express');
const app = express();

const PORT = 3000;


const logmiddleware = (req, res, next) => {
    console.log("hello from middleware");
    // res.send("hello from middleware");
    next();

}

app.use(logmiddleware);

app.get("/", (req, res) => {
    console.log("homepage");
    res.send("hello from get request");
})

app.get("/about", (req, res) => {
    console.log("about page");
    res.send("hello from about page");
})

app.listen(PORT, () => console.log("server is running"));   
