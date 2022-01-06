import React, { useState } from 'react'
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Entradas from './components/Entradas';

function App() {

const [objetivo, setObjetivo] = useState(0);
const [registros, setRegistros] = useState([]);

const agregarNuevo = (registro) => {
  setRegistros([...registros,registro])
}

  return (
    <div className='container mt-5'>
      {objetivo===0? 
        <Pregunta 
          setObjetivo={setObjetivo}
        /> : 
        <>
          <Formulario 
            agregarNuevo={agregarNuevo}
            objetivo={objetivo}
          />
          <hr/>
          {
            registros.length ? 
          <Entradas 
            registros={registros}
            objetivo={objetivo}
          />
          :null
          }
        </>
      }
    </div>
  );
}

export default App;
