const express = require('express'),
      app = express(),
      config = require('./config/configFile'),
      route = require('./routes/userRoute'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose')

// app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) // with this you can send the data to api in json format
    
app.get('/',(req,res)=>{
    res.send({
        "message":"API started"
    })
})

app.use('/api/',route)

mongoose.Promise = global.Promise
mongoose.connect(config.dbPath,{useNewUrlParser: true})
    .then(()=>{
        console.log("Db is connected")
    }).catch(err=>{
        console.log(err)
    })

app.listen(config.serverPort,()=>{
    console.log('server started')
})