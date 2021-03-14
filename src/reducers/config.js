export const changeTitlePageReducer = (state = '', action) => {
    if (action.type === 'CONFIG_TITLE_PAGE') state = action.payload;
    return `${state} | ${process.env.REACT_APP_NAME}`;
}

export const baseUrl = () => {
    let getUrl = window.location.origin.toString()
    let slash = (getUrl.substr(getUrl.length - 1) === '/') ? '' : '/'
    return getUrl + slash
}