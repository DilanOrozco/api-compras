const BcryptService = require('../../../infrastructure/security/BcryptService');
const bcryptService = new BcryptService();

class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(data) {
        const hashedPassword = await bcryptService.hashPassword(data.password);
        data.password = hashedPassword;
        return await this.userRepository.create(data);
    }
}

module.exports = CreateUser;
