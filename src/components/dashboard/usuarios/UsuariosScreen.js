import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startListar, startListarActivos } from '../../../actions/usuario';
import { UsuariosListado } from './UsuariosListado';


export const UsuariosScreen = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch(startListar());
        dispatch(startListarActivos('true'));
        dispatch(startListarActivos('false'));
    }, [dispatch])

    return (
        <UsuariosListado />

    )
}
