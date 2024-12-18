const http= require('http')
const express = require ('express')
const usersRouter= require('./routes/users')
const mongo =require ("mongoose")
const db =require ('./config/db.json')
const { error, log } = require('console')
const path = require('path')
const { Socket } = require('socket.io')
const {addChat}=require('./controlleur/userController')


mongo.connect(db.url).then(
    console.log("database is running")
)
.catch((error)=>
    {console.log(error)}
)

var app= express ()
app.use(express.json())
app.set("views",path.join(__dirname,"views"))
app.set("view engine","twig")
app.use('/users', usersRouter)

const server=http.createServer(app,console.log('server run'))
const io=require("socket.io")(server)
io.on("connection",(socket)=>{console.log("user connected")
    socket.emit("msg","user connected")

    socket.on("msgname",(data)=>{
        addChat(data)
        io.emit("msgname",data)
    })

    socket.on("typing",(data)=>{
        socket.broadcast.emit("typing",data)
    })

    socket.on("disconnect",()=>{console.log("disconnected")
    io.emit("msg","user disconnect")
    })
})

server.listen(3000)