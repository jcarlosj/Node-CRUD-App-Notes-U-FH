/** Configuración de Yargs */
const 
    descripcion = {      /** Nombre del flag (bandera) generica */
        demand: true,    /** Hace que la bandera sea de uso obligatorio */
        alias: 'd',      /** Crea un alias de la bandera establecida (en este caso una abreviación) */
        desc: 'Detalle de la nota de la tarea por hacer'
    },
    opt_crear = {
        descripcion      /** Configuración genérica */
    },
    opt_actualizar = {
        descripcion,        /** Configuración genérica */
        completado: {       /** Nombre del flag (bandera) */
            alias: 'c',     /** Crea un alias de la bandera establecida (en este caso una abreviación) */
            default: true,  /** Valor por defecto en caso de no ser proporcionado */
            desc: 'Estado de la tarea registrada en la nota'
        }
    },
    opt_eliminar = {
        descripcion        /** Configuración genérica */
    },
    argv = require( 'yargs' ) 
        .command( 'crear', 'Crea una nota', opt_crear )
        .command( 'actualizar', 'Actualiza estado completado de una nota', opt_actualizar )
        .command( 'borrar', 'Elimina una nota', opt_eliminar )
        .help()
        .argv;

module .exports = {
    argv
}