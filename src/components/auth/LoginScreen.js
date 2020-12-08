import React, { useState } from 'react';
import './login.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import validator from 'validator';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui)

    /* Formulario Login */
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'dominiolibre@gmail.com',
        lPassword: '123456'
    });

    const { lEmail, lPassword  } = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();
        //console.log(formLoginValues);
        //dispatch(setError('HOLA'));
        dispatch(startLogin(lEmail, lPassword));
    }
    /* Fin Formulario Login */


    /* Formulario Registro */
    const [ inputs, setInputs] = useState({
        rNombre: "",
        rApellido: "",
        rCorreo: "",
        rClave: "",
        rClave2: "",
        rPrivacidad: false
    });

    const { rNombre, rApellido, rCorreo, rClave, rClave2, rPrivacidad  } = inputs;

    const changeForm = (e) => {
        //console.log(e.target);
        //console.log(e.target.value);
        if (e.target.name === "rPrivacidad") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked
            })
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            })
        }
    }

    const register = (e) => {
        e.preventDefault();
        //console.log(inputs);
        //dispatch(setError('HOLA'));
        if (isFormValid()) {
            //console.log('Formulario Correcto');
            dispatch(startRegister(rNombre, rApellido, rCorreo, rClave));
        }
    }

    const isFormValid = () => {
        if (rNombre.trim().length === 0) {
            dispatch(setError('Nombre es requerido'));
            setTimeout(() => {
                dispatch(removeError());
            }, 3000);
            //console.log('Nombre es requerido');
            return false;
        } else if (rApellido.trim().length === 0) {
            //console.log('Apellido es requerido');
            dispatch(setError('Apellido es requerido'));
            setTimeout(() => {
                dispatch(removeError());
            }, 3000);
            return false;
        } else if (!validator.isEmail(rCorreo)) {
            //console.log('El correo no es valido');
            dispatch(setError('El correo no es valido'));
            setTimeout(() => {
                dispatch(removeError());
            }, 3000);
            return false;
        } else if ((rClave !== rClave2) || (validator.isEmpty(rClave)) || (rClave.length < 5) || (rClave2.length < 5) ) {
            //console.log('Password deben ser iguales y deben tener minimo 5 caracteres');
            dispatch(setError('Password deben ser iguales y deben tener minimo 6 caracteres'));
            setTimeout(() => {
                dispatch(removeError());
            }, 3000);
            return false;
        } 
        dispatch(removeError());
        return true;
    }

    const mostrarMensaje = () => {
        return (
            <div className="auth_alert-error">
                {msgError}
            </div>
        )
    }

    /* Fin Formulario Registro */

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>                        
                        
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value= { lEmail }
                                onChange = { handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value= { lPassword }
                                onChange = { handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled = {loading} 
                            >
                                Acceder
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ register } onChange={changeForm}>
                        
                        {msgError && mostrarMensaje()}
                        
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rNombre"
                                value= { rNombre }
                                onChange = { setInputs }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Apellido"
                                name="rApellido"
                                value= { rApellido }
                                onChange = { setInputs }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rCorreo"
                                value= { rCorreo }
                                onChange = { setInputs }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="rClave"
                                value= { rClave }
                                onChange = { setInputs }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="rClave2"
                                value= { rClave2 }
                                onChange = { setInputs }
                            />
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox" 
                                className="form-check-input" 
                                name= "rPrivacidad"
                                checked={ rPrivacidad }
                                onChange = { setInputs }
                            />
                            He leido y acepto las políticas
                        </div>

                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Crear Cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
