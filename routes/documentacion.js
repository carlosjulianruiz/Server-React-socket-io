const express=require("express");
let router = express.Router();


router
    .route("/")
    .get((req,res)=>{
        res.send("hello world");
    })
    .post((req,res)=>{});

router
    .route("/:comId")
    .get((req,res)=>{
        res.send(req.params.comId);
    })
    .post((req,res)=>{})


module.exports= router;