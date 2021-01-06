import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { authReducer } from "./authReducer";
import { usuarioReducer } from "./usuarioReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    usu: usuarioReducer
})