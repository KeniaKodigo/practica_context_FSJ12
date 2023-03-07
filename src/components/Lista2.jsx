import React, {useContext} from 'react'
import { contadorContext } from '../provider/CountContext'

/** paso 4: usando el contexto (useContext) */
export default function Lista2() {
    /** informacion que vamos a utilizar del contexto */
    const {decrementar} = useContext(contadorContext);
  return (
    <div>
        <h1>Decrementando el contador</h1>
        <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}
