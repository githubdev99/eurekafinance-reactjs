import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { combineReducers, createStore } from "redux";

import Auth from './redux/reducers/Auth'
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import App from "./App";

const createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();

class Root extends Component {
    render() {
        const createRootReducer = (history) => combineReducers({
            router: connectRouter(history),
            auth: Auth,
        });

        const rootReducer = (state, action) => {
            if (action.type === "LOGOUT") {
                state = undefined;
            }
            return createRootReducer(history)(state, action);
        };

        const appStore = createStore(rootReducer);

        return (
            <Provider store={appStore}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" component={App} />
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}
export default Root;
