import React, {useContext} from 'react'
import { contadorContext } from '../provider/CountContext'

/** paso 4: usando el contexto (useContext) */
export default function Lista3() {
    const {count, resetear} = useContext(contadorContext);

  return (
    <div>
        <h1>Reseteando el contador</h1>
        <h2>Estado: {count}</h2>
        <button onClick={resetear}>Resetear</button>
    </div>
  )
}
