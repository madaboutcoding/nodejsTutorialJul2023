const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;
const corsOptions = {
    origin: 'http://localhost:4000'    
  }
app.use(cors(corsOptions));
app.post('/',(req,resp)=>{
    resp.send("Post called");
});
app.get('/',(req,resp)=>{
    resp.send("Get called");
});
app.put('/',(req,resp)=>{
    resp.send("Put called");
});
app.delete('/',(req,resp)=>{
    resp.send("Delete called");
});

app.listen(port,(error)=>{
    if(error){
        console.log("Error occured server not started");
    }else{
        console.log(`http://localhost:${port} started`);
    }
});