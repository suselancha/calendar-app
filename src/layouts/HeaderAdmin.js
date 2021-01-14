import React from 'react';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const HeaderAdmin = () => {

    const dispatch = useDispatch();
    const { nombre } = useSelector(state => state.auth);

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/administrador">Usuario: {nombre}</Link>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <input className="form-control form-control-dark w-100" placeholder="Search" aria-label="Search" type="text" />
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#">Salir</a>
                </li>
            </ul>
        </header>
    )
}