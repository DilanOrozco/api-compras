const bcrypt = require('bcrypt')

class BcryptService{
    async hashPassword(password){
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async compared(password, hashPassword){
        return bcrypt.compare(password, hashPassword)
    }
}

module.exports = BcryptService