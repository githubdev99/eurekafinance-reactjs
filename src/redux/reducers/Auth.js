/* eslint-disable import/no-anonymous-default-export */
import {
    INIT_URL,
    TITLE_PAGE,
    LOGIN_USER
} from "../Constant";

let getUrl = window.location.origin.toString()
let slash = (getUrl.substr(getUrl.length - 1) === '/') ? '' : '/'

const INIT_STATE = {
    baseURL: getUrl + slash,
    initURL: '',
    titlePage: '',
    authUser: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case TITLE_PAGE: {
            return {
                ...state,
                titlePage: `${action.payload} | ${process.env.REACT_APP_NAME}`
            }
        }
        case INIT_URL: {
            return {
                ...state,
                initURL: action.payload
            }
        }
        case LOGIN_USER: {
            return {
                ...state,
                authUser: action.payload
            }
        }
        default:
            return state;
    }
}

// export const setTitlePageReducer = (state = '', action) => {
//     if (action.type === 'CONFIG_TITLE_PAGE') state = action.payload;
//     return `${state} | ${process.env.REACT_APP_NAME}`;
// }

// export const baseUrl = () => {
//     let getUrl = window.location.origin.toString()
//     let slash = (getUrl.substr(getUrl.length - 1) === '/') ? '' : '/'
//     return getUrl + slash
// }