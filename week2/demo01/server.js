//step1: importing httpmodule
const http=require('http');
const fs=require('fs');
const port=3000;

//step2
const app=http.createServer((req,resp)=>{
    const methodName=req.method;
    // resp.setHeader("Content-Type","text/html");
    switch(methodName){
        case "POST": 
            resp.setHeader("Content-Type","text/html");
            resp.write("Post");
            resp.end();
            break;
        case "GET": 
            // resp.write("Get");
            resp.setHeader("Content-Type","text/html");
            fs.readFile(__dirname+"/index.html",(error,data)=>{
                resp.setHeader("Content-Type","text/html");
                if(error){
                    console.log("Error occured while reading index.html "+error);
                }else{
                    resp.write(data);            
                }
                resp.end();
            });
            break;
        case "PUT": 
            resp.setHeader("Content-Type","text/html");
            resp.write("Put");
            resp.end();
            break;
        case "DELETE":
            resp.setHeader("Content-Type","text/html");
            resp.write("Delete"); 
            resp.end();
            break;
        default:
            resp.setHeader("Content-Type","text/html");
            resp.write("Default is called "); 
            resp.end();
            break;
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