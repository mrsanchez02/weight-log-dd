import React from 'react';
import {mostrarFecha} from '../helper';

const Entradas = ({objetivo, registros}) => {

    // const diferencia = differenciaObjetivo(objetivo,registros);

    return (
        <>
            <h2 className='text-center'>Historial</h2>
            <br />
            <ul className="list-group">
                {   
                    registros.map(registro=>{
                        let clase = registro.peso<=objetivo ?'badge bg-primary':'badge bg-danger';
                        return (
                        <li 
                            key={registro.id}
                            className="list-group-item"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">
                                    Peso: {registro.peso}
                                </div> 
                            </div>
                            <div className="d-flex">
                                <div className="p-2 flex-grow-1" >{mostrarFecha(registro.fecha)}</div>                            
                                <div className="p-2">Estas a <span className={clase}>{registro.diff}</span> libras de tu peso objetivo.</div>
                            </div>
                        </li>
                    )})
                }
            </ul>
        </>
    )
}

export default Entradas
