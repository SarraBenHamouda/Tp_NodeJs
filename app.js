const http=require('http')
const express=require('express')

const app=express()
app.use(express.json())

const usersRouter=require('./routes/users')
const mongo=require('mongoose')

const db=require('./config/db.json')
const path = require('path')
const {addchat}=require('./controller/userController')
const server= http.createServer(app,console.log('server run'))

const io=require("socket.io")(server)
io.on("connection",(socket)=>{
    console.log("user connected")
    socket.emit("msg","user connected")

    //renvoi le msg dans l'input 
    socket.on("msgname" ,(data)=> {
        //envoi au base de donnes 
        addchat(data)
        io.emit("msgname",data)
    });

    socket.on("disconnect",()=>{
        console.log("user connected")
        io.emit("msg","user disconnected")
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

})


mongo.connect(db.url).then(console.log("database connected")).catch((err)=>{console.log(err)})
app.use('/users',usersRouter)

app.set("views", path.join(__dirname,"views"))
app.set("view engine","twig")

server .listen(3000)