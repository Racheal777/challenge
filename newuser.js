const newuserRouter = require("express").Router();
const{request,response} = require('express')
const newuser = require ('./newuser')

newuserRouter.get('/',(request,response,next) => {
    newuser.find({}).then(res =>{
        response.status(200).send(res)
        next();
    })
})

noteRouter.post ('/',async ( request,response,next) =>{
    const{email,password} = request.body;

    if (email && password){
        const newuserCount = await newuser.countDocuments();

        const newuser = new User ({
            id:newuserCount + 1,
            title: title,
            content: content
        })

        newuser.save()
        .then (res => {
            response.status(201).send(res);
           
        })
    }
    else {
        response.status(400).send({message:'Check your request body'}
        )
    }
});

module.exports = newuserRouter