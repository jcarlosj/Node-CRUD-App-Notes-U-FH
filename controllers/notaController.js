const DB = require( '../models/notaModel' );

let notas = Array();

/** Create */
const crearNota = ( descripcion ) => {

    notas = getListadoNotas();
    
    /** Nuevo Objeto Tarea */
    let tarea = {
        descripcion,
        completado: false
    };

    notas .push( tarea );   /** Guarda la tarea en el Array */
    DB .guardar( notas );   /** Guarda las notas en un archivo */

    return notas;
}

/** Obtener el listado de notas */
const getListadoNotas = () => {
    return DB .getNotas();
}

module .exports = {
    crearNota,
    getListadoNotas
}