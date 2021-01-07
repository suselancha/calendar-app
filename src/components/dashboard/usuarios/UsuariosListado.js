import React, { useState } from 'react';
import { UsuarioEntrada } from './UsuarioEntrada';
import { useSelector } from 'react-redux';

export const UsuariosListado = () => {

    const { usuariosActivos, usuariosInactivos } = useSelector(state => state.usu);
    //console.log(usuarios);
    //console.log(usuariosActivos);
    //console.log(usuariosInactivos);
    const [ verUsuariosActivos, setVerUsuariosActivos ] = useState(true);
    
    return (
        <div>
            <h3>{ verUsuariosActivos ? "Listado Usuarios Activos" : "Listado Usuarios Inactivos" }</h3>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck1"
                    onChange={() => setVerUsuariosActivos(!verUsuariosActivos) }
                />
                <label
                    className="form-check-label"
                    htmlFor="defaultCheck1">
                    { verUsuariosActivos ? "Usuarios Inactivos" : "Usuarios Activos" }
                </label>

            </div>
            <h3>
                { verUsuariosActivos ? <UsuarioEntrada usuarios={usuariosActivos} /> : <UsuarioEntrada usuarios={usuariosInactivos} /> }
            </h3>

        </div>
    )
}
