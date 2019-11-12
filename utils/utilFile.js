const bcrypt = require('bcrypt'),
      mail = require('nodemailer')

module.exports = {
    encryptPassword : (password)=>{
        return bcrypt.hashSync(password, 10)
    },
    sendMail : (email)=>{
        var pr
        var transport = mail.createTransport({
            service: 'outlook',
            tls:{
                rejectUnauthorized: false
            },
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
        pr = transport.sendMail(mailOption)
        return pr

        // transport.sendMail(mailOption, (err,info)=>{
        //     if(err){
        //         console.log(err)
        //     } else {
        //         console.log(info)
        //     }
        // })
    },
    mailPassword: (name,email,link)=>{
        var transport = mail.createTransport({
            service: 'outlook',
            tls:{
                rejectUnauthorized: false
            },
            auth: {
                user: 'dheeraj2406@outlook.com',
                pass: 'VAmp24!@'
            }
        })

        var mailOption = {
            from : 'dheeraj2406@outlook.com',
            to : email,
            subject : 'Password',
            text : `Hello ${name},Please link the link below to change the password`,
            html : "<a href="+link+">Click here to change your password</a>"
        }

        var pr = transport.sendMail(mailOption)
        return pr
    }
}