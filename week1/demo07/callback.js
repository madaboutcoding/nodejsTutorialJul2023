import fs from 'fs';
function mylog(msg){
    console.log("Line 2:"+msg);
}

// mylog(" called    ");
function myLogger(fileName,mycallbackfunction){
    console.log("MyLogger Started ");    
    mycallbackfunction(fileName);
    console.log("MyLogger completed ");

}

// myLogger("mydata.txt",mylog(" Read this file !"));
myLogger("mydata.txt",mylog);
myLogger("myfile",(msg)=>console.log("called"));


// var fs = require("fs");
var data = fs.readFileSync('mydata.txt');
console.log(data.toString());
console.log("Program Ended");
console.log("FS Reafile async called ");
fs.readFile("mydata.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("Data: "+data.toString());
});
console.log("FS Reafile async completed ");