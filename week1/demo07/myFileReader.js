//1. Server must have file to render ->view=>*.html
//2. Readfile view=>*.html 
//3. data of the file appending in response
//4. end the response
// FS => READ/Write/append on server for File resources 
// Synchronous=>!AJAX
// function f1(){
//     console.log("step 1");
//     console.log("step 2");
//     console.log("step 3");
// } 
// f1();
// Asynchronous=>AJAX=> Ack 0/1/2/3/4 if 4 httpstatus 200 => OK 

// import fs from 'fs';
import { readFile } from 'node:fs/promises';
// fs.readFile("./mydata.txt",(err,data)=>{
//     if(err){
//         console.log("File not found");
//     }
//     console.log(data);
// });
try {
    const filePath = new URL('./mydata.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
    
} catch (error) {
    console.log(error);
}

