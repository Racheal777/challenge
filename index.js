const express = require('express')
const app=  express()
const port = 4000
const bodyParser=require("body-parser")
// const newuserRouter = require('./newuser');
require('dotenv').config();


const config ={
    useNewUrlParser:true,
    useUnifiedTopology: true

}



app.use(bodyParser())

app.get("/", (request, response) =>{
    //console.log('This is the request body', request.body)
    response.send("This is the Challenge, and guess what we have accepted it");

});

app.get('/Home',(request,response) => {
   // console.log(request)
    const userData = require("./usermanagement.json");
    response.json(userData);
});

app.post('/Home',(request,response) => {
    
    const requestBody = request.body
   // console.log(requestBody)
    response.send({action :"register", message : "welcome", body : requestBody});

});
app.delete('/Home',(request,response) => {
    
    const user = require ('./usermanagement.json');
    const deleteUser = user.pop()
    response.send(deleteUser);

});

app.post('/Home',(request,response) => {
    
    const user = require ('./usermanagement.json');
    const postnewuser = user.push()
    response.send(postnewuser);

});

app.use(bodyParser.json());
// app.use('/newuser', newuserRouter)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })