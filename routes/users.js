const express = require ("express")
const router = express.Router();
const User = require('../models/user');

router.get('/add/:username/:email/:cin' , (req,res) => {
    try {
        new User ({
            username: req.params.username,
            email: req.params.email,
            cin: req.params.cin,
        }).save()
        res.status(200).send("good added");
    }
    catch (err) {
        console.log(err);
    }  

    router.post('/add' , (req,res) => {
        try {
            
               const user = new user(req.body); 
            user.save()
            res.status(200).send("good added");
        }
        catch (err) {
            console.log(err);
        }  
    
    
}) ;

})

module.exports=router;
