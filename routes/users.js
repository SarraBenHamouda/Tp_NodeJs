const express = require ("express")
const router = express.Router();
const User = require('../models/user');
const userController = require('../controlleur/userController');
const validat = require('../middl/validate')


/*router.get('/add/:username/:email/:cin' , (req,res) => {
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
});*/
router.post('/add',validat,userController.add) ;

router.get('/showusers',userController.findAll ) ;

router.get('/showusers/username' ,userController.findOneByName)

router.get('/showBynameUsers/username' ,userController.showAllByName)

router.get('/showUserById/:id' ,userController.showByID)

router.put('/update/:id' ,userController.update)

router.delete('/delete/:id' ,userController.deleteUser)

router.get("/chat",(red,res)=>
    res.render("chat")
)

module.exports=router;
