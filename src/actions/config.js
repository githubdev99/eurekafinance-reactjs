export const changeTitlePage = (payload) => {
    return {
        type: "CONFIG_TITLE_PAGE",
        payload: payload,
    }
}

export const baseUrl = (payload) => {
    return {
        type: "CONFIG_BASE_URL",
        payload: payload,
    }
}