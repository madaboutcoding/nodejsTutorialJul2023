import http from 'http';

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html");
    resp.write("Server created !")
    resp.write("<h1>Welcome to backend programming</h1>");
    resp.end();
}).listen(3333,()=>{
    console.log(`http://localhost:3333 started ....`);
})