export class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    //getter setter
    get tipo() {
        return this._tipo;
    }
    set tipo(v) {
        this._tipo = v;
    }
    get numero() {
        return this._numero;
    }
    set numero(v) {
        this._numero = v;
    }
}
