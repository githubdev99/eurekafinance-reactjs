import React, { Component, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, location, authUser, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return !authUser ? <Component {...props} /> : <Redirect
                    to={{
                        pathname: '/dashboard',
                        state: { from: location }
                    }}
                />;
            }}
        />
    );
};

export default PublicRoute;
