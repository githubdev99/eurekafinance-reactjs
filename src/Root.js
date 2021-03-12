import React, { Component } from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import {
    changeTitlePageReducer,
} from "./reducers";

class Root extends Component {
    render() {
        const appReducer = combineReducers({
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
