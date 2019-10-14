const cron = require('cron').CronJob

new cron('* * * * * *',()=>{
    console.log('Job started')
},null,true,'')