"use strict";
/*
-Crea una clase que guarde el nombre y número de telefono.
-Guarda esta información en una array para poder leer y borrar entradas.
-Crea un metodo de busqueda, borrado, y otro de mostrar la información de la entrada de la agenda.
*/
let datos = [];
class Agenda {
    constructor(_id, _nombre, _telefono) {
        console.log(`Creando contacto con id: ${_id}`);
        this.id = _id;
        this.nombre = _nombre;
        this.telefono = _telefono;
    }
    //1r metodo: Añadir datos al Array.
    añadirDatos() {
        datos.push({ id: this.id, nombre: this.nombre, telefono: this.telefono });
    }
    //2ndo metodo: Mostrar los datos de la agenda.
    mostrarDatos() {
        let encontrado = false;
        for (let i in datos) {
            if (datos[i].id === this.id) {
                console.log(datos[i]);
                encontrado = true;
            }
        }
        if (encontrado === false) {
            console.log('Contacto no encontado.');
        }
    }
    //3r metodo: Borrar un contacto.
    borrarDatos() {
        for (let i in datos) {
            if (datos[i].id === this.id) {
                let index = parseInt(i);
                datos.splice(index, 1);
            }
        }
    }
    buscarPorId() {
        for (let i in datos) {
            if (datos[i].id === this.id) {
                console.log('\n\nID: ' + datos[i].id + ' \nNombre: ' + datos[i].nombre + '\nTeléfono: ' + datos[i].telefono);
            }
        }
    }
}
const contacto1 = new Agenda('contacto1', 'alex', '655765432');
const contacto2 = new Agenda('contacto2', 'Julia', '987654321');
const contacto3 = new Agenda('contacto3', 'Ramon', '135784536');
const contacto4 = new Agenda('contacto4', 'Lucia', '666444111');
contacto1.añadirDatos();
contacto2.añadirDatos();
contacto3.añadirDatos();
contacto4.añadirDatos();
contacto3.buscarPorId();
