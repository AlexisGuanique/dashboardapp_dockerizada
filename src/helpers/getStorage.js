

export const getStorage = ( data ) => {
    const miStorage = window.localStorage;

    miStorage.setItem('data', JSON.stringify(data))
}