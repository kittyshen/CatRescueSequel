var express = require("express");
var router = express.Router();

//preapare to use database
var db = require("../models/");

// var orm = require("../config/orm.js")
// Create all routes and set up logic within those routes where required.
router.get("/",function(req,res){
    db.Cat.findAll({        
        include: [db.Owner]
    }).then(function(data){
        // console.log(data);
        // res.json(data);
        res.render("../views/index.handlebars",{cats:data})
    });
})

router.get("/all",function(req,res){
    db.Cat.findAll({        
        include: [db.Owner]
    }).then(function(data){
        // console.log(data);
        res.json(data);
        // res.render("../views/index.handlebars",{cats:data})
    });
})

router.post("/addcat",function(req,res){
    // console.log(req.body);
    db.Cat.create({cat_name:req.body.name}).then(function(data){
        res.json(data);
    });

})

router.post("/owner",function(req,res){
    // console.log(req.body);
    db.Owner.create(
        req.body,
        // {include: [db.Cat]}
    ).then(function(data){
        res.json(data);
    });

})

router.put("/adpotcat/:id",function(req,res){
     console.log("inside adopt",req.body.name);
    db.Cat.update(
        {   rescued:1,
            OwnerId:req.body.OwnerId
        },
        {where:{id:req.params.id}})
    .then(function(data){
        // console.log(data);
        res.json(data);
    });
})
module.exports = router;