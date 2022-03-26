export class Telefono {
    private _tipo: string;
    private _numero: string;

    constructor(tipo:string, numero:string) {
        this._tipo = tipo;
        this._numero = numero;
    }

//getter setter

    public get tipo() : string {
    return this._tipo;
    }
    public set tipo(v:string) {
    this._tipo = v;
    }
    public get numero() : string {
    return this._numero;
    }
    public set numero(v : string) {
    this._numero = v;
}
}