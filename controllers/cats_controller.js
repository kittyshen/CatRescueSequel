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

router.get("/find/:who",function(req,res){
    var user = req.params.who;
    db.Owner.findAll({
        where: {name:user}
    }).then(function(data1){
        // console.log(data1);
        var alldata=[];
        for(var i = 0 ; i< data1.length; i++){
            alldata.push(data1[i].id);
        }
        console.log(alldata);
            db.Cat.findAll({    
                include: [db.Owner],
                where:{OwnerId : {$or:alldata}}
            }).then(function(data){
                // console.log(JSON.stringfy(data));
                // alldata.push(JSON.parse(data));
                res.send(data);
                // res.render("../views/index.handlebars",{cats:data})
            });
        
        
    })
    // db.Cat.findAll({    
    //     include: [db.Owner],
    //     where:{[db.Owner.name] :'kitty'}
    // }).then(function(data){
    //     // console.log(data);
    //     res.json(data);
    //     // res.render("../views/index.handlebars",{cats:data})
    // });
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