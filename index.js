var http = require("http");
var server = http.createServer(function (req, res){
    res.writeHead(201,{
        "Content-Type": "application/json", 
        Accept:"application/json"
    });
    /* const person ={
        name:"john",
        age:20,
    }; */
    /* var resData = ""; */

    var citationTable = [
        {
            id : 1,
            content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },

        {
            id : 2,
            content : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
        },

        {
            id : 3,
            content : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "
        },
        {
            id : 4,
            content : "e Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during tLorem ipsum dolor sit amet.., comes from a line in section 1.1 "
        },
        {
            id : 5,
            content : "f you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful"
        },
        {
            id : 6,
            content : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "
        },
        {
            id : 7,
            content : "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32. "
        },
        {
            id : 8,
            content : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "
        },
        {
            id : 9,
            content : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "
        },
        {
            id : 10,
            content : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. "
        }
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
    res.end(JSON.stringify(citationTable[getRandomInt(citationTable.length)]));


  /*   req.on("data", function(chunk){
        console.log("GOT DATA");
        console.log(chunk.toString());
        resData += chunk.toString()
    })

    req.on("end", function(){
        res.end(resData);
    }) */
    //convertir la réponse en json
    //res.end(JSON.stringify(resData));

    //
});
server.listen(8001,function (){
    console.log("Server is running at 8001");
});
