var http = require("http");
var server = http.createServer(function (req, res){
    res.writeHead(201,{
        "Content-Type": "application/json", 
        Accept:"application/json"
    });
   var resData =""
    var Dico =[
        {
            Francais:"manger",
            English :"eat",

        },
        {
            Francais:"dormir",
            English :"sleep",
        },
        {
            Francais:"courir",
            English :"run",
        },
        {
            Francais :"venir",
            English:"come",
        },
    ];
    
        req.on("data", function(chunk){
        console.log("GOT DATA");
        resData += chunk.toString();
    })   


    req.on("end", function(){
        try {
            const requestValue = resData;
            const motTraduction = requestValue;
            
            if(motTraduction){ 
                const traduction = Dico.find(entry => entry.English === motTraduction);
                const anglais = Dico.find(entry => entry.Francais === motTraduction);
                if (traduction){
                    res.end (JSON.stringify(traduction));
                }
                else if(anglais){
                    res.end (JSON.stringify(anglais));
                }
                else {
                    res.end(JSON.stringify({ error : "Traduction non trouvée"}));
                }
            }else{
                res.end(JSON.stringify({error:"le mot n'a pas été défini lors de l'envoi de la requête"}));
            }
        }  
       catch(error){
            res.end (JSON.stringify({ error:"Erreur lors de l'analyse de la requête"}));
        }
       
    });




});
server.listen(8002,function (){
    console.log("Server is running at 8002");
});