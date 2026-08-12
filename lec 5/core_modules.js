// const os= require('os');
// const path= require('path');
// const fs= require('fs');
// const crypto= require('crypto');
const dns= require('dns');


// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(os.homedir())
// console.log((os.totalmem()/1024/1024/1024).toFixed(2) + " GB")
// console.log(os.freemem());

// const filePath=path.resolve(__dirname,"core_modules.js");
// console.log(__dirname);

// const filePath=path.join("BCA-D","lecture 5","core_modules.js");
// const filePath=path.join(os.homedir(),"Documents");
// console.log(filePath);

// const file="BCA-D/lecture 5/core_modules.js";
// console.log(path.basename(file));
// console.log(path.extname(file));
// console.log(path.dirname(file));

// fs module

// console.log("A")
// const data=fs.readFileSync("sample.txt","utf-8");
// console.log(data);

// fs.readFile("lec 5/core_modules.js","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// })
// console.log("B")

// fs.writeFileSync("sample.txt","Hello World");
// console.log("File updated");

// fs.writeFile("sample.txt","Hello World",(err)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("File updated");
//     }   
// })

// fs.appendFileSync("./sample.txt","\nHello World again");
// console.log("File updated");

// fs.unlinkSync("./sample.txt");
// console.log("File deleted");


//crypto module

// const password="1236"
 
// const hash=crypto.createHash("sha256").update(password).digest("hex")
// console.log(hash)


// const salt=crypto.randomBytes(16).toString("hex");
// // console.log(salt);

// const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hash);  


// DNS module

// dns.lookup("www.google.com",(err,address,family)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Address: ",address);
//         console.log("Family: ",family);
//     }})


// dns.reverse("8.8.8.8",(err,hostnames)=>{
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Hostnames: ",hostnames);
//     }       
// })