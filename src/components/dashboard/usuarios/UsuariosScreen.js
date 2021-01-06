import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startListar } from '../../../actions/usuario';
import { UsuariosListado } from './UsuariosListado';


export const UsuariosScreen = () => {

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startListar());    
    }, [dispatch])

    return (
        
        <div>
            <h3>Listado de usuarios</h3>
            <UsuariosListado />
        </div>
    )
}
