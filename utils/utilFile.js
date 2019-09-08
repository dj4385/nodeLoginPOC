const bcrypt = require('bcrypt'),
      mail = require('nodemailer')

module.exports = {
    encryptPassword : (password)=>{
        return bcrypt.hashSync(password, 10)
    },
    sendMail : (email)=>{
        var transport = mail.createTransport({
            service: 'outlook',
            auth: {
                user: 'dheeraj2406@outlook.com',
                pass: 'VAmp24!@'
            }
        })

        var mailOption = {
            from : 'dheeraj2406@outlook.com',
            to : email,
            subject : 'Welcome ',
            text : 'Welcome to our POC'
        }

        transport.sendMail(mailOption, (err,info)=>{
            if(err){
                console.log(err)
            } else {
                console.log(info)
            }
        })
    }
}