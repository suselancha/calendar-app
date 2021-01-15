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
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h3>{ verUsuariosActivos ? "Listado Usuarios Activos" : "Listado Usuarios Inactivos" }</h3>
            <div className="form-check form-switch">
                <input
                    className="form-check-input" 
                    type="checkbox" 
                    defaultChecked 
                    onChange={() => setVerUsuariosActivos(!verUsuariosActivos) }
                />
                <label
                    className="form-check-label" 
                    htmlFor="flexSwitchCheckChecked">
                    { verUsuariosActivos ? "Usuarios Activos" : "Usuarios Inactivos" }
                </label>
            </div>

            { verUsuariosActivos ? <UsuarioEntrada usuarios={usuariosActivos} /> : <UsuarioEntrada usuarios={usuariosInactivos} /> }                
                        
        </main>
    )
}
