class GetUsuarioByEmail{
    constructor(usuariosRepository){
        this.usuariosRepository = usuariosRepository;
    }

    async execute(email){
        return await this.usuariosRepository.findByEmail(email)
    }
}

module.exports = GetUsuarioByEmail