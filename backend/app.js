const express = require('express')
const dotenv = require('dotenv')
const app= express()
const cors = require('cors');
app.use(express.json())
app.use(cors())
app.use('/',require('./api/routes/userRoutes'))
app.use('/',require('./api/routes/blogRoutes'))
const server = app.listen(4000,err=>{
    if(err){
        console.log('Server Crash'+JSON.stringify(err))
    }
    else{
        console.log('Server started at '+server.address().port)
    }
})