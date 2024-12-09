const User = require("../models/user");
const Chat = require("../models/chat");


async function addUser (req,res){
    try{
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    } 
};


async function addchat (data){
    try{
        const chat = new Chat({
            msg:data.msg
        });
        await chat.save();
    }catch(err){
        console.log(err);
    } 
};

async function showUser (req,res){
    try{
        const user = await User.find();
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
};

async function showByid (req,res){
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
};

async function showByname (req,res){
    try{
        const user = await User.findOne({username:req.params.username});
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
}; 

async function showBynameUsers (req,res){
    try{
        const user = await User.find({username:req.params.username});
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
};

async function updateUser (req,res){
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body , {
            new:true,
        });
        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
}; 

async function deleteUser (req,res){
    try{
        const user = await User.findByIdAndUpdate(req.params.id );
        res.status(200).json("user deleted");
    }catch(err){
        console.log(err);
    }
};

module.exports = {
    addUser,
    showUser,
    showByid,
    showByname,
    showBynameUsers,
    updateUser,
    deleteUser,
    addchat,
};
