

export const getCompare = ( data, dataToSave ) => {
    
    //? -------------------------------------------------------------------------------
    //? Hora actual

    const date = new Date();
    const [month, day, year, hour, minute, second] = [date.getMonth(), date.getDate(), date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()]
    const horaActual = (`${day}/${month}/${year} - ${hour}:${minute}:${second} h`);

    //? -------------------------------------------------------------------------------

    const dataProcesada = [];

    data.map( item => {
        
        const findedElement = dataToSave.find(element => element?.path === item?.config?.url);

        if(findedElement){

            item['date'] = horaActual;
            dataProcesada.push(item)

        } else {
            dataProcesada.push(item)
        }

    })


    console.log(dataProcesada);
    // console.log(dataToSave);


    return dataProcesada;
}