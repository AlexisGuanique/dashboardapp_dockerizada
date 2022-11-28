import { v4 as uuidv4 } from 'uuid';


export const getData = (dataProcesada, testData) => {

    const new_data = []


    if (dataProcesada.length) {
        dataProcesada.map((item) => {
            if (item) {
                new_data.push({
                    key: uuidv4(),
                    direccion: item?.request?.responseURL,
                    status: item?.status,
                    state: (item?.status) === 200 ? '🟢' : '🔴',
                    fecha: item?.date,
                    statustext: (item?.status) === 200 ? 'OK' : item?.data
                });
            }

        })
    }

    if (testData.length) {
        testData.map((item) => {
            if (item) {
                new_data.push({
                    key: uuidv4(),
                    direccion: item?.config?.url,
                    status: -1,
                    state: '🔴',
                    statustext: item?.message,
                });
            }

        })
    }


    new_data.forEach((element, index) => (
        element['servicio'] = `Servicio ${index + 1}`
    ))

    return new_data;
}