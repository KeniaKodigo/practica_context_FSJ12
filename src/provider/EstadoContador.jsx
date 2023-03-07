import React, {useState} from 'react'
import { contadorContext } from './CountContext'
/** paso 2: asignar informacion al contexto */
/** children: queremos decir que pasamos componentes hijos */
export default function EstadoContador({children}) {
/** dando la informacion que va tener nuestro contexto */

const [count, setCount] = useState(20);

/** metodo para incrementar el contador */
const incrementar = () => {
    setCount(count + 1);
}

/** metodo para decrementar el contador */
const decrementar = () => {
    setCount(count - 1);
}

/** metodo para resetear el contador */
const resetear = () =>{
    setCount(0);
}

/** retornamos el contexto como provider */
    return (
        /** en el value recibimos la informacion que va tener el contexto */
        <contadorContext.Provider value={{count, incrementar, decrementar, resetear}}>
            {/** pasando el contexto a los componentes hijos */}
            {children}
        </contadorContext.Provider>
    )
}
