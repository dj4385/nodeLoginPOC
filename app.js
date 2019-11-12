const express = require('express'),
      app = express(),
      config = require('./config/configFile'),
      route = require('./routes/userRoute'),
      productRoute = require('./routes/productRoute')
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
<<<<<<< HEAD
      winston = require('./utils/logger'),
      ejs = require('ejs')

=======
      winston = require('./utils/logger')
>>>>>>> 942196cbd789409a1e179640bdd411a4a5707d1c

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({limit: '10mb', extended: true})) // with this you can send the data to api in json format
app.use(cors())

app.get('/',(req,res)=>{
    res.send({
        "message":"API started"
    })
})

app.use('/api/',route)
app.use('/api/product/',productRoute)

app.set('view engine','ejs')

mongoose.Promise = global.Promise
mongoose.connect(config.dbPath,{useCreateIndex: true,
    useNewUrlParser: true})
    .then(()=>{
        winston.debug('Data base is connected')
        console.log("Db is connected")
    }).catch(err=>{
        winston.debug(err)
        console.log(err)
    })

app.listen(config.serverPort,()=>{
    winston.debug('server started at port : ',config.serverPort)
    console.log('server started',config.serverPort)
})