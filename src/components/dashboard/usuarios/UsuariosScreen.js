import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startListarActivos } from '../../../actions/usuario';
import { UsuariosListado } from './UsuariosListado';


export const UsuariosScreen = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startListarActivos('true'));
        dispatch(startListarActivos('false'));
    }, [dispatch])

    return (
        <UsuariosListado />

    )
}
