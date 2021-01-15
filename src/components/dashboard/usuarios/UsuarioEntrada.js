import React from 'react';

export const UsuarioEntrada = (props) => {

    //console.log(props);
    const { usuarios } = props;
    //console.log(usuarios);
    
    return (
        /*<div>
            {
                usuarios.map( value => (
                    `${value.nombre} - ${value.apellido}`
                ))
            }
        </div>*/

        <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Apellido</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map( value => (
                                <tr key={value._id}>
                                    <td>{value._id}</td>
                                    <td>{value.apellido}</td>
                                    <td>{value.nombre}</td>
                                    <td>{value.correo}</td>
                                    <td>{value.rol}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

    )
}
