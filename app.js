const argv = require( './config/yargs' ) .argv,
      notas = require( './controllers/notaController' ),  
      comando = argv ._[ 0 ];          /** Obtengo el comando escrito en la linea de comandos */

console .log( argv );

/** Separamos la ejecución de cada uno de los comandos disponibles */
switch( comando ) {
    case 'crear':
        let tarea = notas .crearNota( argv .descripcion );
        console .log( ' > Crea nota \n', tarea );
        break;
    case 'listar':
        console .log( 'Listar Notas' );
        break;
    case 'actualizar':
        console .log( 'Actualizar Nota' );
        break;    
    default:
        console .log( 'Comando no encontrado' );
        break;
}