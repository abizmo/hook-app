import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    /* Cambiar a useCallback */
    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementarCB = useCallback(
        (num) => {
            setValor(v => v + num)
        },
        [setValor],
    )


    return (
        <div className="div">
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementarCB }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
