import React from 'react';
import { UsuarioModal } from './UsuarioModal';
import NoAvatar from '../../../assets/img/no-avatar.png';

export const UsuarioEntrada = (props) => {

    //console.log(props);
    const { usuarios } = props;
    //console.log(usuarios);

    return (

        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Apellido</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(value => (
                            <tr key={value._id}>
                                <td>{value._id}</td>
                                <td><img src={NoAvatar} /></td>
                                <td>{value.nombre}</td>
                                <td>{value.correo}</td>
                                <td>{value.rol}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        onClick={() => console.log('Editar')}
                                    >
                                        Editar
                                        </button>
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        onClick={() => console.log('Eliminar')}
                                    >
                                        Eliminar
                                        </button>
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        onClick={() => console.log('Activar/Desactivar')}
                                    >
                                        {value.estado ? "Desactivar" : "Activar"}
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <UsuarioModal />

        </div>

    )
}
