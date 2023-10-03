 var homeController = require("../Controllers/home_controller");
const routes ={
    "/" :{
        method: "GET",
        handler:homeController.index
    },
        "/about" :{
            method:'POST',
            handler:homeController.store
        },
  
};
const router =(req,res)=>{
    const {url ,method}=req;
    const route = routes[url];
    if (!route){
        res.writeHead(404);
        res.end("404 Not Found");
        return ;
    }
    if (method != route.method){
        res.writeHead(405);
        res.end("405 Method not Allowed");
        return ;
    }
else{
    route.handler(req,res)

}
    
}
module.exports = router;