import React, { Component, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                return auth ? Component : <Redirect to="/login" />;
            }}
        />
    );
};

export default PrivateRoute;
