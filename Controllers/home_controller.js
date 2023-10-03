const index = (req ,res )=>{
    res.end("This is a home Page")
}
const store = (req,res)=>{
    res.end ("This is about page");

}
module.exports = {index ,store};