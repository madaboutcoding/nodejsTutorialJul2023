//step1: importing httpmodule
const http=require('http');
const fs=require('fs');
const { error } = require('console');
const port=4000;

//step2
const app=http.createServer((req,resp)=>{
    const method=req.method;
    const url=req.url;
    console.log("METHOD: ",method);
    console.log("url: ",url);
    if(method==="GET"&&url==="/"){
        fs.readFile(__dirname+"/index.html",(error,data)=>{
            resp.setHeader("Content-Type","text/html");
            if(error){
                console.log("Error occured while reading index.html "+error);
            }else{
                resp.write(data);            
            }
            resp.end();
        });
    }else if(method==="GET"&&url==="/style.css"){
        fs.readFile(__dirname+"/style.css",(error,data)=>{
            resp.setHeader("Content-Type","text/css");
            if(error){
                console.log("Error occured while reading index.html "+error);
            }else{
                resp.write(data);            
            }
            resp.end();
        });
    }
    
    
});
// step3
app.listen(port,(error)=>{
    if(error){
        console.log("Error occured server not started");
    }else{
        console.log(`http://localhost:${port} started`);
    }
})