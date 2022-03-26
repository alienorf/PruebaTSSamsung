export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigopostal: number;
    private _poblacion: string;
    private _provincia: string

    constructor(calle: string, numero: number, piso: number, letra: string, codigopostal: number, poblacion: string, provincia: string) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigopostal = codigopostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }


    public get calle() : string {
        return this._calle;
    }
    public set calle(v : string) {
        this._calle = v;
    }
    
    public get numero() : number {
        return this._numero;
    }
    public set numero(v : number) {
        this._numero = v;
    }
    
    public get piso() : number {
        return this._piso;
    }
    public set piso(v : number) {
        this._piso = v;
    }
    
    public get letra() : string {
        return this._letra;
    }
    public set letra(v : string) {
        this._letra = v;
    }

    public get codigopostal() : number {
        return this._codigopostal;
    }
    public set codigopostal(v : number) {
        this._codigopostal = v;
    }
    
    public get poblacion() : string {
        return this._poblacion;
    }
    public set poblacion(v : string) {
        this._poblacion = v;
    }
    
    public get provincia() : string {
        return this._provincia;
    }
    public set provincia(v : string) {
        this._provincia = v;
    }
    
}