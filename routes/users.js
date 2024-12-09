const express=require('express')
const router=express.Router()
const userController = require('../controller/userController');
const User=require('../models/user');
const validate=require('../middll/validate');

/* router.get('/add/:username/:email/:cin',(req,res)=>{
    try{
        new User({
            username:req.params.username,
            email:req.paramsmail,
            cin:req.params.cin
        }).save();
        res.status(200).send("good added");
    }catch(err){
        console.log(err)
    }
});*/

router.post("/addUser", validate,userController.addUser);

router.get("/showUser",userController.showUser);

router.get("/showByid/:id",userController.showByid);

router.get("/showByname/:username",userController.showByname);

//les users ont le meme nom
router.get("/showBynameUsers/:username",userController.showBynameUsers);

router.put("/updateUser/:id",userController.updateUser);

router.delete("/deleteUser/:id",userController.deleteUser);

router.get("/chat",(req,res)=>{
res.render("chat")
})


module.exports = router ;



