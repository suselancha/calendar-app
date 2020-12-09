import { types } from '../types/types';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import Swal from 'sweetalert2';
import { finishLoading, startLoading } from './ui';

//Tarea asincrona
export const startLogin = ( correo, clave) => {
    return async(dispatch) => {
        //console.log(email, password);
        dispatch(startLoading());
        const resp = await fetchSinToken('auth', { correo, clave}, 'POST');
        const body = await resp.json(); 
        //console.log(body);
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                nombre: body.nombre
            }))
            dispatch(finishLoading());
        } else {
            //console.log (body.msg);
            Swal.fire('Error', body.msg, 'error');
            dispatch(finishLoading());
        }
    }
}

export const startRegister = (nombre, apellido, correo, clave) => {
    return async(dispatch) => {
        //console.log(nombre, apellido, correo, clave);
        dispatch(startLoading());
        const resp = await fetchSinToken('auth/new', { nombre, apellido, correo, clave }, 'POST');
        const body = await resp.json(); 
        console.log(body);
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                nombre: body.nombre
            }))
            dispatch(finishLoading());
        } else {
            //console.log (body.msg);
            Swal.fire('Error', body.msg, 'error');
            dispatch(finishLoading());
        }
        
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startCheking = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('auth/renew');
        const body = await resp.json(); 
        //console.log(body);
        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                nombre: body.nombre
            }))
        } else {
            //console.log (body.msg);
            //Swal.fire('Error', body.msg, 'error');
            dispatch(checkingFinish());
            /* CUANDO TOKEN SEA INCORRECTO ENVIAR AL LOGIN*/
        }
    }
}

const checkingFinish = () => ({
    type: types.authCheckingFinish
})

export const startLogout = () => { 
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
})