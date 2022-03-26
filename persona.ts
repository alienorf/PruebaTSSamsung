import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

// class declaration
export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    public _dni: string;
    private _cumpleanos: Date;
    private _colorFavorito: string;
    private _sexo: string;
    private _direccion: Array<Direccion>;
    private _mail: Array<Mail>;
    private _telefono: Array<Telefono>;
    private _notas: string;
  
    constructor(
      nombre: string,
      apellidos: string,
      edad: number,
      dni: string,
      cumpleanos: Date,
      colorFavorito: string,
      sexo: string,
      direccion: Array<Direccion>,
      mail: Array<Mail>,
      telefono: Array<Telefono>,
      notas: string
    ) {
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
  
    public get nombre(): string {
      return this._nombre;
    }
    public set nombre(v: string) {
      this._nombre = v;
    }
  
    public get apellidos(): string {
      return this._apellidos;
    }
    public set apellidos(v: string) {
      this._apellidos = v;
    }
  
    public get edad(): number {
      return this._edad;
    }
    public set edad(v: number) {
      this._edad = v;
    }
  
    public get dni(): string {
      return this._dni;
    }
    public set dni(v: string) {
      this._dni = v;
    }
  
    public get cumpleanos(): Date {
      return this._cumpleanos;
    }
    public set cumpleanos(v: Date) {
      this._cumpleanos = v;
    }
  
    public get colorFavorito(): string {
      return this._colorFavorito;
    }
    public set colorFavorito(v: string) {
      this._colorFavorito = v;
    }
  
    public get sexo(): string {
      return this._sexo;
    }
    public set sexo(v: string) {
      this._sexo = v;
    }
  
    public get direccion(): Array<Direccion> {
      return this._direccion;
    }
    public set direccion(v: Array<Direccion>) {
      this._direccion = v;
    }
  
    public get mail(): Array<Mail> {
      return this._mail;
    }
    public set mail(v: Array<Mail>) {
      this._mail = v;
    }
  
    public get telefono(): Array<Telefono> {
      return this._telefono;
    }
    public set telefono(v: Array<Telefono>) {
      this._telefono = v;
    }
  
    public get notas(): string {
      return this._notas;
    }
    public set notas(v: string) {
      this._notas = v;
    }
    addnewaddress(direccion:Direccion) {
      this._direccion.push(direccion)
    }
  
    addnewphone(telefono:Telefono) {
      this._telefono.push(telefono)
    }
  
    addnewmail(mail:Mail) {
      this._mail.push(mail)
    }
}    