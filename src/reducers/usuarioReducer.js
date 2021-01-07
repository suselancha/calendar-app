import { types } from '../types/types';

const initialState = {
    usuarios: [],
    usuariosActivos: [],
    usuariosInactivos: []
};

export const usuarioReducer = ( state = initialState, action) => {

    switch ( action.type ) {
        case types.usuarioListar:
            return {
                ...state,
                //...action.payload
                usuarios: [ ...action.payload ]
            }

        case types.usuarioListarActivos:
            //console.log(action.payload);
                return {
                    ...state,
                    //...action.payload
                    usuariosActivos: [ ...action.payload ]
                }
        case types.usuarioListarInactivos:
                return {
                    ...state,
                    //...action.payload
                    usuariosInactivos: [ ...action.payload ]
                }
        default:
            return state;
    }

}