class Usuario {
    constructor({id, email, password, rol, status}){
        this.id = id;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.status = status;
    }
}

module.exports = Usuario 