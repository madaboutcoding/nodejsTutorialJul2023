const express=require('express');
const app=express();
const port=3000;

//index.html
app.get('/',(req,resp)=>{
    resp.sendFile(__dirname+"/index.html");
});
//style.css
app.get('/style.css',(req,resp)=>{
    resp.sendFile(__dirname+"/style.css");
});


app.listen(port,(error)=>{
    if(error){
        console.log("Error occured server not started");
    }else{
        console.log(`http://localhost:${port} started`);
    }
});