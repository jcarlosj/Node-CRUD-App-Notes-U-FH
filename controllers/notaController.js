const DB = require( '../models/notaModel' );

let notas = Array();

/** Create: Crear Nota */
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

/** Read: Obtener el listado de notas */
const getListadoNotas = () => {
    return DB .getNotas();
}

/** Update: Actualizar Nota */
const actualizarNota = ( descripcion, completado = true ) => {
    let index;

    notas = getListadoNotas();

    index = notas .findIndex( tarea => {    /** findIndex(): Devuelve el índice del primer elemento de un array que cumpla con la condición. En caso contrario devuelve -1. */
        return tarea .descripcion === descripcion;
    });

    if( index >= 0 ) {
        notas[ index ] .completado = completado;    /** Cambia el valor de la propiedad */
        DB .guardar( notas );   /** Guarda las notas en un archivo */
        return true;
    }
    else {
        return false;
    }
}

module .exports = {
    crearNota,
    getListadoNotas,
    actualizarNota
}