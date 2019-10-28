const colors = require( 'colors' ),
      argv = require( './config/yargs' ) .argv,
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
        console .log( 'Listar Notas' .blue );
        console .log( '-------------------------------' .blue );

        let tareas = notas .getListadoNotas( argv .mostrar );

        for( const tarea of tareas ) {
            console .group( ' > ', tarea .descripcion );
            console .log( '  Estado: ', tarea .completado );
            console .groupEnd();
            console .log( '-------------------------------' .blue );
        }

        break;
    case 'actualizar':
        let actualizada = notas .actualizarNota( argv .descripcion, argv .completado );
        console .log( actualizada ? 'Nota Actualizada con éxito' .bgGreen .white .bold : 'No se ha podido actualizar' .bgRed .white .bold );
        break;    
    case 'borrar':
        let borrada = notas .eliminarNota( argv .descripcion );
        console .log( borrada ? 'Nota Eliminada con éxito' .bgGreen .white .bold : 'No se ha podido eliminar' .bgRed .white .bold );
        break;
    default:
        console .log( 'Comando no encontrado' );
        break;
}