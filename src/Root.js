import React, { Component } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import {
    baseUrl,
    changeTitlePageReducer,
} from "./redux/reducers";

class Root extends Component {
    render() {
        const appReducer = combineReducers({
            baseUrl: baseUrl,
            titlePage: changeTitlePageReducer,
        });

        const rootReducer = (state, action) => {
            if (action.type === "LOGOUT") {
                state = undefined;
            }
            return appReducer(state, action);
        };

        const appStore = createStore(rootReducer);

        return (
            <Provider store={appStore}>
                {this.props.children}
            </Provider>
        );
    }
}
export default Root;
