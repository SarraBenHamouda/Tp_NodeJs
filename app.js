const http= require('http')
const express = require ('express')
const usersRouter= require('./routes/users')
const mongo =require ("mongoose")
const db =require ('./config/db.json')
const { error } = require('console')

mongo.connect(db.url).then(
    console.log("database is running")
)
.catch((error)=>
    {console.log(error)}
)

var app= express ()
app.use('/users', usersRouter)

const server=http.createServer(app,console.log('server run'))

server.listen(3000)