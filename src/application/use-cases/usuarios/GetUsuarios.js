class GetUsuarios {
    constructor(usuariosRepository){
        this.usuariosRepository = usuariosRepository
    }

    async execute(){
        return await this.usuariosRepository.find();
    }
}

module.exports = GetUsuarios