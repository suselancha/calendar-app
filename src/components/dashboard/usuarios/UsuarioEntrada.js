import React from 'react';

export const UsuarioEntrada = (props) => {

    //console.log(props);
    const { usuarios } = props;
    //console.log(usuarios);
    
    return (
        <div>
            {
                usuarios.map( value => (
                    `${value.nombre} - ${value.apellido}`
                ))
            }
        </div>
    )
}
