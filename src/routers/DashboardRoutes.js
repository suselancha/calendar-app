import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ClientesScreen } from '../components/dashboard/clientes/ClientesScreen'
import { PanelScreen } from '../components/dashboard/PanelScreen'
import { Navbar } from '../components/dashboard/ui/Navbar'
import { UsuariosScreen } from '../components/dashboard/usuarios/UsuariosScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />  
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
