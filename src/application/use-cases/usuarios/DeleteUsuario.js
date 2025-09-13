class DeleteUsuario {
    constructor(usuariosRepository){
        this.usuariosRepository = usuariosRepository
    }

    async execute(id){
        return this.usuariosRepository.delete(id)
    }
}

module.exports = DeleteUsuario