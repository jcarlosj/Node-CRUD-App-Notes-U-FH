const fs = require( 'fs' );

const guardar = ( notas ) => {
    let data = JSON .stringify( notas );

    // Crea o Escribe un Archivo (El directorio 'tablas' debe estar creado)
    fs .writeFile( 'db/data.json', data, ( err ) => {
        console .log( ' > Lista', data );

        if ( err ) throw new Error( ' > No se pudo guardar los cambios', err );
        else console .log( ' ! Los cambios se han guardado exitosamente' );
    });    
}

module .exports = {
    guardar
}