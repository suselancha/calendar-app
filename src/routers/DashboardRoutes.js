import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ClientesScreen } from '../components/dashboard/clientes/ClientesScreen'
import { PanelScreen } from '../components/dashboard/PanelScreen'
import { UsuariosScreen } from '../components/dashboard/usuarios/UsuariosScreen'
import { Admin } from '../layouts/Admin'

export const DashboardRoutes = () => {
    return (
        <>
            <Admin />
            
            <div>
                <Switch>
                    <Route
                        exact path="/administrador/"
                        component={ PanelScreen } 
                    />
                    <Route
                        exact path="/administrador/usuarios"
                        component={ UsuariosScreen } 
                    />
                    <Route
                        exact path="/administrador/clientes"
                        component={ ClientesScreen } 
                    />
                    <Redirect to="/administrador" />
                </Switch>
            </div>
        </>
    )
}
