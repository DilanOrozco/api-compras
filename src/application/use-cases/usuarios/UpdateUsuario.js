class UpdateUsuario {
    constructor(usuariosRepository){
        this.usuariosRepository = usuariosRepository;
    }

    async execute(id, data){
        return await this.usuariosRepository.update(id, data);

    }
}

module.exports = UpdateUsuario