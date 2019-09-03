const express = require('express'),
      app = express(),
      config = require('./config/configFile')
    
app.get('/',(req,res)=>{
    res.send({
        "message":"API started"
    })
})

app.listen(config.serverPort,()=>{
    console.log('server started')
})