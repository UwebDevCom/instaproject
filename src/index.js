import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './AppContext/AppContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Components/auth/PrivateRoute';
import LoginFirst from './Components/Login-first/login-first';
import SignUp from './Components/sign-up/SignUp';
import PageNotFound from './Components/page-not-found/PageNotFound';

ReactDOM.render(
<Router>
    <Context>
        <Switch>
            <PrivateRoute exact path='/' component={App} />
            <Route exact path='/login' component={LoginFirst} />
            <Route exact path='/signup' component={SignUp} />
            <Route component={PageNotFound} />
        </Switch>
    </Context>
</Router>
, document.getElementById('root'));


