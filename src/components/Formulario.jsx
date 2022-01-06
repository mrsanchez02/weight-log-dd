import React, { useState } from 'react'
import shortid from 'shortid';
import {differenciaObjetivo,validarFecha} from '../helper';

const Formulario = ({ agregarNuevo,objetivo }) => {

    const [nuevoRegistro, setNuevoRegistro] = useState({
        peso: '',
        fecha: ''
    });

    const [error, setError] = useState(false);

    const { peso, fecha } = nuevoRegistro;

    const handleChange = e => {
        setNuevoRegistro({
            ...nuevoRegistro,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Validando inputs.

        if(validarFecha(fecha)){
            setError(true);
            return
        }

        if (peso === 0 || fecha.trim() === '' || isNaN(peso)) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return
        }
        // Liberando error, if needed.
        setError(false);

        // Agregando ID
        nuevoRegistro.id = shortid.generate();

        // Diferencia entre el peso objetivo y el peso actual:
        nuevoRegistro.diff = differenciaObjetivo(objetivo,peso);

        agregarNuevo(nuevoRegistro);

        // Limpiando formulario
        setNuevoRegistro({
            peso: '',
            fecha: ''
        });
    }

    return (
        <>
            <h2>Registra tu peso</h2>
            {error ?
                <div className="alert alert-danger" role="alert">
                    Por favor ingrese un peso objetivo válido!
                </div>
                : null}

            <form className='my-5 px-5' onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className='form-label'>Ingresa el peso a registrar...</label>
                        <input
                            type="number"
                            id='floatingPesoActual'
                            placeholder='Ej.: 190'
                            className="form-control"
                            onChange={handleChange}
                            value={peso}
                            name="peso"
                            required
                            />
                        <div className='form-text text-end'>*peso en libras.</div>
                    </div>
                <div className='col-md-6'>
                    <label className='form-label'>...y la fecha para el registro.</label>
                    <input
                        type="date"
                        id='fechaActual'
                        className="form-control mb-2 text-center"
                        onChange={handleChange}
                        name="fecha"
                        value={fecha}
                        required
                    />
                </div>
                </div>
                    <button
                        className="btn btn-outline-primary form-control my-2"
                        type="submit"
                        id="button-addon1"
                    >Agregar!</button>
            </form>
        </>
    )
}

export default Formulario
