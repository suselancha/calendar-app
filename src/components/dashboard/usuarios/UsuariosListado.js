import React from 'react';
import { UsuarioEntrada } from './UsuarioEntrada';
import { useSelector } from 'react-redux';

export const UsuariosListado = () => {

    const { usuarios } = useSelector(state => state.usu);
    //console.log(usuarios);
    
    return (
        <div>
            {
                usuarios.map( usuario => (
                    <UsuarioEntrada
                        key={ usuario._id } 
                        { ...usuario }
                    />
                ))
            
            }

        </div>
    )
}
