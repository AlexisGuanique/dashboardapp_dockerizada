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
        if (!getLocalStorage('dataToSave') || getLocalStorage('dataToSave').length === 0) {
            setLocalStorage('dataToSave', data);
            dataToSave.push(getLocalStorage('dataToSave'));
        }
    } catch (error) {
        console.log(`Ya hay un registro en el localStorage con ese nombre`)
    }

    console.log(dataToSave);


    data.forEach((item) => {

        if (item && item.status >= 200 && item.status <= 299) {

            const findedElement = dataToSave.find(element => element?.config?.url === item?.config?.url);
            
            if (!findedElement) {
                item['date'] = horaActual;
            }
            setLocalStorage('dataToSave', data);
        }

    })
    console.log(data)
    

    return data;


}