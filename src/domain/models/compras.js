class Compra {
    constructor({cliente, telefono, fecha, items, domicilio, direccion, total}) {
        this.cliente = cliente;
        this.telefono = telefono;
        this.fecha = fecha;
        this.items = items; // array de objetos { producto, cantidad, precio }
        this.domicilio = domicilio;
        this.direccion = direccion; // objeto { calle, ciudad }
        this.total = total;
    }
}

module.exports = Compra ;
