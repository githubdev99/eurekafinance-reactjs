export const changeTitlePageReducer = (state = '', action) => {
    if (action.type === 'CONFIG_TITLE_PAGE') state = action.payload;
    return `${state} - ${process.env.REACT_APP_NAME}`;
}