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
    changePassword: (name,email,link)=>{
        console.log(link)
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
            subject : 'Change Password',
            // text : `Hello ${name},
            // Please click on the link to change the password
            // <a href='${link}'>Change Password</a>`
            text : 'Hello '+name+' click <a href="'+link+'">here</a>',
            html : "<a href="+link+">Helo</a>"
        }

        var pr = transport.sendMail(mailOption)
        return pr
    }
}