import { getStorage } from "./getStorage";


export const getElementByPath = (data) => {

    const { setLocalStorage, getLocalStorage } = getStorage();


    //? -------------------------------------------------------------------------------
    //? Hora actual
    const date = new Date();
    const [month, day, year, hour, minute, second] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()]
    const horaActual = (`${day}/${month}/${year} - ${hour}:${minute}:${second} h`);
    //? -------------------------------------------------------------------------------


    const dataToSave = [];

    const dataStorage = getLocalStorage('dataToSave');
    try {
        if (!dataStorage) {
            setLocalStorage('dataToSave', dataToSave);
        }
    } catch (error) {
        console.log(`dataToSave encontrado`)
    }


    data.forEach((item) => {
        if (item && item.status >= 200 && item.status <= 299) {

            // * //////////////////////////////////////////////////////////////
            // * Esto era cuando tenemos un array con varias url's repetidas
            const findedElement = dataToSave.find(element => element?.path === item?.config?.url);

            if (!findedElement) {
                dataToSave.push({
                    path: item.config.url,
                    status: item.status,
                    date: horaActual
                })
            }
            // * //////////////////////////////////////////////////////////////

        }
    })
    

    try {
        if (!dataStorage || dataStorage.length === 0) {
            setLocalStorage('dataToSave', dataToSave)
        }
    } catch (error) {
        console.log(error)
    }

    return dataToSave;


}