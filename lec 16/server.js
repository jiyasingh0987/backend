const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;


// const logmiddleware = (req, res, next) => {
//     // console.log("hello from middleware");
//     // req.name = "abhijeet";
//     console.log("Req url:", req.url, "Time:", new Date().toLocaleString());
//     // res.send("hello from middleware");
//     next();

// }

const welcomeMiddleware = (req, res, next) => {
    console.log("welcome to my website");
    next();
}

// app.use(morgan("dev"));
app.use(morgan("combined"));
app.use(welcomeMiddleware);
// app.use(logmiddleware);

app.get("/", (req, res) => {
    console.log("homepage");
    res.send("hello from get request");
})

app.get("/about", (req, res) => {
    console.log("about page");
    res.send("hello from about page");
})

app.listen(PORT, () => console.log("server is running"));   
