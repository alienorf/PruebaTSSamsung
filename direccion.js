export class Direccion {
    constructor(calle, numero, piso, letra, codigopostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigopostal = codigopostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    get calle() {
        return this._calle;
    }
    set calle(v) {
        this._calle = v;
    }
    get numero() {
        return this._numero;
    }
    set numero(v) {
        this._numero = v;
    }
    get piso() {
        return this._piso;
    }
    set piso(v) {
        this._piso = v;
    }
    get letra() {
        return this._letra;
    }
    set letra(v) {
        this._letra = v;
    }
    get codigopostal() {
        return this._codigopostal;
    }
    set codigopostal(v) {
        this._codigopostal = v;
    }
    get poblacion() {
        return this._poblacion;
    }
    set poblacion(v) {
        this._poblacion = v;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(v) {
        this._provincia = v;
    }
}
