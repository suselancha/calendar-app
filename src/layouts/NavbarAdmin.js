import React from 'react';

import { NavLink } from 'react-router-dom';

export const NavbarAdmin = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>MENÚ</span>
                            <a className="link-secondary" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle" />
                            </a>
                        </h6>
                        <ul className="nav flex-column">
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
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="shopping-cart" />
                                        Productos
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>REPORTES</span>
                            <a className="link-secondary" href="#" aria-label="Add a new report">
                                <span data-feather="plus-circle" />
                            </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file-text" />
                                    Ventaa
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file-text" />
                                    Compras
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div></div>
    )
}
