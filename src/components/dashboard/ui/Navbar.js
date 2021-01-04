import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../../actions/auth';

export const Navbar = () => {
    
    const dispatch = useDispatch();
    const { nombre } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout());
    }
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/administrador"
            >
                Sistemas
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/administrador/usuarios"
                    >
                        Usuarios
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/administrador/clientes"
                    >
                        Clientes
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        { nombre }
                    </span>
                    <button
                        className="nav-item nav-link btn" 
                        onClick= {handleLogout}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>
                </ul>
            </div>
        </nav>
    )
}