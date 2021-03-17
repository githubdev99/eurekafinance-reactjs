import {
    INIT_URL,
    TITLE_PAGE,
    LOGIN_USER
} from "../Constant";

export const changeTitlePage = (title) => {
    return {
        type: TITLE_PAGE,
        payload: title,
    }
}

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
}

export const setLoginUser = (auth) => {
    return {
        type: LOGIN_USER,
        payload: auth
    };
}