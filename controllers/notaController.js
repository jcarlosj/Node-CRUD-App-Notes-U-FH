const DB = require( '../models/notaModel' );

let notas = Array();

/** Create */
const crearNota = ( descripcion ) => {

    notas = DB .getNotas();
    
    /** Nuevo Objeto Tarea */
    let tarea = {
        descripcion,
        completado: false
    };

    notas .push( tarea );   /** Guarda la tarea en el Array */
    DB .guardar( notas );   /** Guarda las notas en un archivo */

    return notas;
}



module .exports = {
    crearNota
}