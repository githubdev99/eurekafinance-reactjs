import React from "react";
import Account from './../components/content/account/index';
import Dashboard from './../components/content/dashboard/index';
import { Switch, Route } from "react-router-dom";

export default function Routes() {
    return (
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/account">
                <Account />
            </Route>
        </Switch>
    );
}