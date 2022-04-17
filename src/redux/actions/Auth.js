import {
    INIT_URL,
    TITLE_PAGE,
    LOGIN_USER
} from "../Constant";

export const setTitlePage = (title) => {
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
    localStorage.setItem('authUser', Number(auth))

    return {
        type: LOGIN_USER,
        payload: Number(auth)
    };
}