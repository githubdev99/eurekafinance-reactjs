import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../../components/content/auth/login';
import Register from '../../components/content/auth/register';
import ForgotPassword from '../../components/content/auth/forgot_password';

export default function ListPublicRoute() {
    return (
        <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/forgot-password" render={() => <ForgotPassword />} />
        </Switch>
    );
}