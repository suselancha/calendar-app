import React from 'react';

export const UsuarioEntrada = ({nombre, apellido}) => {

    //console.log(nombre, apellido);

    return (
        <div>
            <p>{ nombre } - { apellido }</p>
        </div>
    )
}
