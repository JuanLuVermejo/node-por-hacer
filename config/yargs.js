const opts1 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        // default: true,
        desc: 'Marca como compleatado o pendiente la tarea',
        type: 'boolean'
    }
};

const { descripcion: opts2 } = opts1;
const { completado: opts3 } = opts1;

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion: opts2 })
    .command('listar', 'Genera una lista de todas las tareas', { completado: opts3 })
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts1)
    .command('borrar', 'Borra una tarea', { descripcion: opts2 })
    .help()
    .argv;

module.exports = {
    argv
};