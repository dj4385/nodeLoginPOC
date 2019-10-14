const express = require('express'),
      app = express(),
      config = require('./config/configFile'),
      route = require('./routes/userRoute'),
      productRoute = require('./routes/productRoute')
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),



      require('./startup/prod')(app)

// app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}))
app.use(bodyParser.json({limit: '10mb', extended: true})) // with this you can send the data to api in json format
app.use(cors())

app.get('/',(req,res)=>{
    res.send({
        "message":"API started"
    })
})

app.use('/api/',route)
app.use('/api/product/',productRoute)


mongoose.Promise = global.Promise
mongoose.connect(config.dbPath,{useCreateIndex: true,
    useNewUrlParser: true})
    .then(()=>{
        console.log("Db is connected")
    }).catch(err=>{
        console.log(err)
    })

app.listen(config.serverPort,()=>{
    console.log('server started',config.serverPort)
})