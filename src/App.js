import React, { useState,useEffect } from 'react'
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Entradas from './components/Entradas';

function App() {

  let objetivoIniciado = JSON.parse(localStorage.getItem('objetivo'));
  let registroInicial = JSON.parse(localStorage.getItem('registros'));

  if(!objetivoIniciado) objetivoIniciado = 0;
  if(!registroInicial) registroInicial = []

  const [objetivo, setObjetivo] = useState(objetivoIniciado);
  const [registros, setRegistros] = useState(registroInicial);

  useEffect(()=>{
    if(registroInicial||objetivoIniciado){
      localStorage.setItem('objetivo',objetivo);
      localStorage.setItem('registros',JSON.stringify(registros));
    } else {
      localStorage.setItem('objetivo',objetivo);
      localStorage.setItem('registros',JSON.stringify([]));
    }
  },[registros,registroInicial,objetivo,objetivoIniciado])

  const agregarNuevo = (registro) => {
    setRegistros([...registros,registro])
  }

  const limpiarHistorial = () => {
    setRegistros([]);
  }

  const reiniciarTodo = () =>{
    limpiarHistorial();
    setObjetivo(0);
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
            limpiarHistorial={limpiarHistorial}
            reiniciarTodo={reiniciarTodo}
          />
          :null
          }
        </>
      }
    </div>
  );
}

export default App;
