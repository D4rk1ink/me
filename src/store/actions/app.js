export const ISLOADING = '[App] IsLoading'

const getPackage = (type, payload) => {
    return { type, payload }
}

export const IsLoadingAction = (payload) => {
    return getPackage(ISLOADING, payload)
}