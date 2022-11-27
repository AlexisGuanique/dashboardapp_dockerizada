import { getStorage } from "./getStorage";


export const getElementByPath = (state) => {

    console.log(state);

    //? -------------------------------------------------------------------------------
    //? Hora actual

    const date = new Date();
    const [month, day, year, hour, minute, second] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()]
    const horaActual = (`${day}/${month}/${year} - ${hour}:${minute}:${second} h`);

    //? -------------------------------------------------------------------------------


    const dataToSave = [];

    state.data.forEach((item) => {
        if (item && item.status >= 200 && item.status < 299 ) {
            const findedElement = dataToSave.find(element => element?.path === item?.config?.url);
            if (!findedElement) {
                dataToSave.push({
                    path: item.config.url,
                    status: item.status,
                    date: horaActual
                })
            }

        }
    })

    const { setLocalStorage, getLocalStorage } = getStorage();

    setLocalStorage('dataToSave', dataToSave)

    console.log(getLocalStorage('dataToSave'))

    return {dataToSave}
}