import React, {useContext} from 'react'
import { contadorContext } from '../provider/CountContext'

/** paso 4: usando el contexto (useContext) */
export default function Lista1(props) {
    /** utilizando el estado que hay dentro del contexto contadorContext */
    const { count, incrementar } = useContext(contadorContext)
    return (
        <div>
            <h1>Incrementando el contador</h1>
            <p>Lista {props.count}</p>
            <h2>Estado: {count}</h2>
            <button onClick={incrementar}>incrementar</button>
        </div>
    )
}
