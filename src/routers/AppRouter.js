import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { startCheking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PanelScreen } from '../components/dashboard/PanelScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startCheking());
    }, [dispatch])

    console.log(checking);
    if (checking) {
        return (<h5>Espere....</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact path="/login"
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        exact path="/"
                        component={ PanelScreen } 
                        isAuthenticated={ !!uid }
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}


