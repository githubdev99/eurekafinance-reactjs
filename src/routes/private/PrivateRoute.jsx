import React, { Component, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                console.log(props);
                return auth ? <Component {...props} /> : <Redirect to="/auth/login" />;
            }}
        />
    );
};

export default PrivateRoute;
