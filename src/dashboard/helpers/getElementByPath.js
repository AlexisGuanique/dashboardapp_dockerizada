import { getStorage } from "./getStorage";

export const getElementByPath = (data) => {

    const { setLocalStorage, getLocalStorage } = getStorage();

    let dataToSave = [];

    //? -------------------------------------------------------------------------------
    //? Hora actual
    const date = new Date();
    const [month, day, year, hour, minute, second] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()]
    const horaActual = (`${day}/${month}/${year} - ${hour}:${minute}:${second} h`);
    //? -------------------------------------------------------------------------------

    try {
        dataToSave = getLocalStorage('dataToSave');

        if (!dataToSave || dataToSave.length === 0) {
            dataToSave = data;
        }
    } catch (error) {
        console.log(error)
    }

    // console.log(dataToSave);

    data.forEach((item) => {

        if (item && item.status >= 200 && item.status <= 299) {
            item['date'] = horaActual

        } else {
            const findedElement = dataToSave.find(element => element?.config?.url === item?.config?.url);
            if (findedElement) {
                item['date'] = dataToSave['date']
            }
        }
    })

    setLocalStorage('dataToSave', data);

    // console.log(data)

    return data;

}