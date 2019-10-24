const fs = require( 'fs' );

/** Create */
const guardar = ( notas ) => {
    let data = JSON .stringify( notas );

    // Crea o Escribe un Archivo (El directorio 'tablas' debe estar creado)
    fs .writeFile( 'db/data.json', data, ( err ) => {
        console .log( ' > Lista', data );

        if ( err ) throw new Error( ' > No se pudo guardar los cambios', err );
        else console .log( ' ! Los cambios se han guardado exitosamente' );
    });    
}

/** Read */
const getNotas = () => {
    try {
        notas = require( '../db/data.json' );
    }
    catch( error ) {
        notas = [];     /** Garantiza que siempre habrá un array y no generará error la lectura del archivo "vacio" */
    }

    return notas;
}

module .exports = {
    guardar,
    getNotas
}