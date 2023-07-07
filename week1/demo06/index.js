//Creating a simple http server on node 
// step1: import the http module
import http from 'http';


// step2.1: define a function for what sever should do if request comes

//sever will serve req,resp
function onRequest(req,resp){
    const method=req["method"];
    console.log("Listening to the request method is "+method);
    resp.setHeader("Content-Type","text/html");
    switch(method){
        case "GET":
            resp.write("Called GET");
            break;
            case "POST":
                resp.write("Called POST");
                break;
                case "PUT":
                    resp.write("Called PUT");
                    break;
                    case "DELETE":
                        resp.write("Called DELETE");
                        break;
                        default:
                            resp.write("Called NONE");
                            break;
    }
    resp.end();
}
// step2.2: create server object
const server=http.createServer(onRequest);

//step3: decide a port where the server is listeninig 
const port=3333;
//step 4: call the listen method and callback to indicate server started.
server.listen(port,function(){
    console.log("Server is started ......................");
    console.log(`http://localhost:${port}/ started`);
})