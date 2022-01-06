export const differenciaObjetivo = (objetivo,peso) => {
    let resultado = peso - objetivo;
    return resultado;
}


export const mostrarFecha = (fecha) => {
    const option = {timeZone:'UTC',day:'numeric',month: 'long',year:'numeric'}
    const nuevaFecha = new Date(fecha).toLocaleDateString('es-DO',option);
    return nuevaFecha
}

export const validarFecha = (fechaInsertada) => {
    const fechaActual = new Date();
    const fechaCompare = new Date(fechaInsertada);
    return fechaActual.getTime() <= fechaCompare.getTime();
}