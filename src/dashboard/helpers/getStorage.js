
export const getStorage = ( key = '', data ) => {
    const miStorage = window.localStorage;

    const setLocalStorage = (key, data) => {
        return miStorage.setItem(key, JSON.stringify(data))
    }


    const getLocalStorage = ( key ) => {
        return JSON.parse(miStorage.getItem(key));
    }


    return {
        getLocalStorage,
        setLocalStorage,
    }
}