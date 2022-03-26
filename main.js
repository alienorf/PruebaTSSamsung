import { Persona } from './persona';
import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';
// creación usuario A
let direccionA = new Direccion("Carrer Corsega", 1, 1, "A", 08026, "Barcelona", "Barcelona");
let mailA = new Mail("Personal", "p.garcia@hotmail.com");
let telefonoA = new Telefono("Personal", "123456789");
let personaA = new Persona('Pedro', 'Garcia', 22, 'Y1234569A', new Date('2000-02-21'), 'azul', 'hombre', [direccionA], [mailA], [telefonoA], "Trabaja de noche");
// creación usuario B:
let direccionB = new Direccion("Carrer de Francia", 2, 3, "D", 17250, "Platja d'Aro", "Girona");
let mailB = new Mail("Personal", "a.sanchez@gmail.com");
let telefonoB = new Telefono("Personal", "234567890");
let personaB = new Persona('Alicia', 'Sanchez', 30, 'Y2345678L', new Date('1992-01-21'), 'rosa', 'mujer', [direccionB], [mailB], [telefonoB], "Estudia de noche");
// creación usuario C:
let direccionC = new Direccion("Avenida de los Castros", 23, 3, "E", 39012, "Santander", "Cantabria");
let mailC = new Mail("Profesional", "b.gonzales@santander.es");
let telefonoC = new Telefono("Profesional", "345678901");
let personaC = new Persona('Berta', 'Gonzales', 50, 'Y3456789B', new Date('1972-01-10'), 'verde', 'mujer', [direccionC], [mailC], [telefonoC], "Esta en la lista Robinson");
// ver datos actuales
console.log("Aquí se puede consultar los usuarios actuales");
console.log(personaA);
console.log(personaB);
console.log(personaC);
// find user with DNI
const newaddress = new Direccion("Plaza Cataluna", 32, 1, "A", 08002, "Barcelona", "Barcelona");
const newmail = new Mail("personal", "b.gonzales@gmail.com");
const newphone = new Telefono("profesional", "678901234");
const Userbase = new Array(personaA, personaB, personaC);
const finddni = "Y3456789B";
const finduser = Userbase.find(Persona => Persona.dni === finddni);
// change data
const adddireccion = new Direccion("Plaza Cataluna", 32, 1, "A", 08002, "Barcelona", "Barcelona");
const addmail = new Mail("personal", "b.gonzales@gmail.com");
const addphone = new Telefono("profesional", "678901234");
finduser.addnewaddress(adddireccion);
finduser.addnewmail(addmail);
finduser.addnewphone(addphone);
// check new data
console.log("Aquí se puede consultar los datos actualizados");
console.log(personaA);
console.log(personaB);
console.log(personaC);
