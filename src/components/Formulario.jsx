import React, { useState } from 'react'
import shortid from 'shortid';
import {differenciaObjetivo} from '../helper';

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
            {error ?
                <div class="alert alert-danger" role="alert">
                    Por favor ingrese un peso objetivo válido!
                </div>
                : null}

            <form className='my-5' onSubmit={handleSubmit}>
                <div className="form-floating input-group mb-3">
                    <input
                        type="number"
                        id='floatingPesoActual'
                        className="form-control"
                        placeholder="Ingrese su peso actual"
                        onChange={handleChange}
                        value={peso}
                        name="peso"
                        required
                    />
                    <label htmlFor="floatingPesoActual">Ingrese su peso actual</label>
                    <input
                        type="date"
                        id='fechaActual'
                        className="form-control"
                        onChange={handleChange}
                        name="fecha"
                        value={fecha}
                        required
                    />
                    <button
                        className="btn btn-primary"
                        type="submit"
                        id="button-addon1"
                    >Ingresar</button>
                </div>
            </form>
        </>
    )
}

export default Formulario
