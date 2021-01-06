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
