const express=require("express");
let router = express.Router();
const io = require('socket.io-client');


const socket = io('http://localhost:3001');


router
    .route("/")
    .get((req,res)=>{
        res.send("hello world");
        
        console.log(socket.id);
        socket.emit('message',"documento actualizado");
    })
    .post((req,res)=>{});

router
    .route("/:comId")
    .get((req,res)=>{
        res.send(req.params.comId);
    })
    .post((req,res)=>{})


module.exports= router;