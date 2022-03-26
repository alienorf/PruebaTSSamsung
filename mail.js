export class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(v) {
        this._tipo = v;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(v) {
        this._direccion = v;
    }
}
