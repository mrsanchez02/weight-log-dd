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
          <Entradas 
            registros={registros}
            objetivo={objetivo}
          />
        </>
      }
    </div>
  );
}

export default App;
