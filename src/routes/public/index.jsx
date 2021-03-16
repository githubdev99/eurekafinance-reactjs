import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../../components/content/auth/login';
import Register from '../../components/content/auth/register';
import ForgotPassword from '../../components/content/auth/forgot_password';

export default function ListPublicRoute() {
    const splitFullUrl = window.location.pathname.split('/')
    const $ = window.$

    useEffect(() => {
        if (splitFullUrl[1] != 'dashboard') {
            $('body').addClass('account-body accountbg');
        } else {
            $('body').addClass('dark-sidenav');
        }
    }, [])

    return (
        <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/forgot-password" render={() => <ForgotPassword />} />
        </Switch>
    );
}