let  http=require("http");
let  url = require("url");
let router = require("./js/router");

console.log(router);

http.createServer((req,res)=>{
    if(req.url !="/favicon.ico"){
        res.setHeader("Access-Control-Allow-Origin","*")
      res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        let path= url.parse(req.url).pathname
      
       console.log(typeof path);

    //    controller层，控制请求执行的函数
       if(path==="/"){
           router["home"](req,res);
       }else{
           router[path.substring(1)](req,res);
       }
    }
}).listen(9999) ;
console.log("server running at 9999....")