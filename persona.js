// class declaration
export class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, sexo, direccion, mail, telefono, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direccion = direccion;
        this._mail = mail;
        this._telefono = telefono;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(v) {
        this._nombre = v;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(v) {
        this._apellidos = v;
    }
    get edad() {
        return this._edad;
    }
    set edad(v) {
        this._edad = v;
    }
    get dni() {
        return this._dni;
    }
    set dni(v) {
        this._dni = v;
    }
    get cumpleanos() {
        return this._cumpleanos;
    }
    set cumpleanos(v) {
        this._cumpleanos = v;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(v) {
        this._colorFavorito = v;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(v) {
        this._sexo = v;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(v) {
        this._direccion = v;
    }
    get mail() {
        return this._mail;
    }
    set mail(v) {
        this._mail = v;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(v) {
        this._telefono = v;
    }
    get notas() {
        return this._notas;
    }
    set notas(v) {
        this._notas = v;
    }
    addnewaddress(direccion) {
        this._direccion.push(direccion);
    }
    addnewphone(telefono) {
        this._telefono.push(telefono);
    }
    addnewmail(mail) {
        this._mail.push(mail);
    }
}
