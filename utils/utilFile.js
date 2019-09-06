const bcrypt = require('bcrypt')

module.exports = {
    encryptPassword : (password)=>{
        return bcrypt.hashSync(password, 10)
    }
}