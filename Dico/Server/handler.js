const useRouter = require ("./routes");

const handler = (req ,res)=>{
    res.writeHead(201,{
        "Content-Type": "application/json", 
        Accept:"application/json"
    });

useRouter(req,res);

};
module.exports = handler;
