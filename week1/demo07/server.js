import http from 'http';
import fs from 'fs';
const PORT=3000;
const msg=`http://localhost:${PORT} listening `;
//1. Text
// http.createServer((req,resp)=>{
//     resp.setHeader("Content-Type","text/text");
//     resp.write("<h1>Text Demo</h1>");
//     resp.end();
// }).listen(PORT,()=>console.log(msg));
//2. HTML->Dynamic o/p + BL 
// http.createServer((req,resp)=>{
//     resp.setHeader("Content-Type","text/html");
//     resp.write("<h1 style='color:#ff0000;'>HTML Demo</h1>");
//     resp.end();
// }).listen(PORT,()=>console.log(msg));
// 3. Render HTML file
// http.createServer((req,resp)=>{
//     fs.readFile("./index.html",(err,data)=>{
//         resp.setHeader("Content-Type","text/html");
//         if(err){
//             resp.write("Error occured");
//         }
//         resp.write(data);
//         return resp.end();
//     });
// }).listen(PORT,()=>console.log(msg));
// 4. JSON
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","application/json");
    const message={"message":"Json Data demo"};
    resp.write(JSON.stringify(message));
    resp.end();
}).listen(PORT,()=>console.log(msg));
