import React from 'react';
import { differenciaObjetivo } from '../helper';

const Entradas = ({objetivo, registros}) => {

    // const diferencia = differenciaObjetivo(objetivo,registros);

    return (
        <>
            <h2 className='text-center'>Registros</h2>
            <br />
            <ul className="list-group">
                {   
                    registros.map(registro=>(
                        <li 
                            key={registro.id}
                            className="list-group-item">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">
                                Peso: {registro.peso}
                            </div> 
                        </div>
                        <div className="d-flex">
                            <div className="p-2 flex-grow-1" >{registro.fecha}</div>                            
                            <div className="p-2">Estas a <span className='badge bg-primary'>{registro.diff}</span> libras de tu peso objetivo.</div>
                        </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Entradas
