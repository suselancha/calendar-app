import { types } from '../types/types';
import { fetchConToken } from '../helpers/fetch';
import Swal from 'sweetalert2';


//Tarea asincrona
export const startListar = () => {
    return async(dispatch) => {
        //console.log('SI ENTROOOOOO');
        //dispatch(startLoading());
        const resp = await fetchConToken('usuarios');
        const body = await resp.json(); 
        //console.log(body);
        if (body.ok) {
            dispatch(listar( body.usuarios ))
            //dispatch(finishLoading());
        } else {
            //console.log (body.msg);
            Swal.fire('Error', body.msg, 'error');
            //dispatch(finishLoading());
        }
    }
}

const listar = (usuarios) => ({
    type: types.usuarioListar,
    payload: usuarios
})

export const startListarActivos = (status) => {
    return async(dispatch) => {
        //console.log('SI ENTROOOOOO');
        //dispatch(startLoading());
        const resp = await fetchConToken(`usuarios/usuarios-activos?activo=${status}`);
        const body = await resp.json(); 
        //console.log(body);
        if (body.ok && status === 'true') {
            dispatch(listarActivos( body.usuarios ));
            //dispatch(finishLoading());
        } else if (body.ok && status === 'false') {
            dispatch(listarInactivos( body.usuarios ));
        } else {
            //console.log (body.msg);
            Swal.fire('Error', body.msg, 'error');
            //dispatch(finishLoading());
        }
        
    }
}

const listarActivos = (usuarios) => ({
    type: types.usuarioListarActivos,
    payload: usuarios
})

const listarInactivos = (usuarios) => ({
    type: types.usuarioListarInactivos,
    payload: usuarios
})