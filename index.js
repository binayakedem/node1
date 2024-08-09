const http=require("http");
const fs=require("fs");

// this function takes the listener which handle the incoming requiest
const myserver=http.createServer((req,res)=>{
    const log=`${Date.now().toLocaleString()}\n`
    // fs.appendFile("logs.txt",log,(err,data)=>{

    //     res.end("Hello from server");
    // })
//    you can also multiple request easily can be handled

switch(req.url){
    case "/":
        res.end("you are in home page")
        break;
    case "/about":
        res.end("You are in about section")
        break;
    default:
        res.end("Not found");
}
});

myserver.listen(8000,()=>{
    console.log("Server is started");
})