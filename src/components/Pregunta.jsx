import React,{useState} from 'react'

const Pregunta = ({setObjetivo}) => {

    const [goal, setGoal] = useState(0);
    const [error, setError ] = useState(false);

    const handleChange = e => {
        setGoal(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(goal<=90){
            setError(true);
            setGoal(0);
            return
        }
        setError(false)

        setObjetivo(goal);

    }

    return (
        <>
        <h1 className='display-1 mb-2'>Cual es tu peso objetivo?</h1>
        <hr/>
        {error?
            <div class="alert alert-danger" role="alert">
                Por favor ingrese un peso objetivo válido!
            </div>
        :null}
        <form className='my-5' onSubmit={handleSubmit}>
            <div className="form-floating input-group mb-3">
                <input 
                    type="number" 
                    id='floatingInput' 
                    className="form-control" 
                    placeholder="Ingrese su peso objetivo en libras..." 
                    onChange={handleChange}
                    required
                />
                <label htmlFor="floatingInput">Ingrese su peso objetivo en libras...</label>
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

export default Pregunta
