import { types } from "../types/types";
import { fetchSinToken } from "../helpers/fetch";

//Tarea asincrona
export const startLogin = ( email, password) => {
    return async() => {
        //console.log(email, password);
        const resp = await fetchSinToken('auth', { email, password}, 'POST');
        const body = await resp.json();

        console.log(body);
    }
}