import { useState, useEffect } from "react";

import { getService } from "../api/getService";


const testData = [];

export const useFetch = (items) => {

    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: false
    })

    const response = () => {
        //! Agregar setInterval
        //! setInterval(() => {
        //! }, 120000);
        
        try {
            Promise.all(items.map((item) => getService.get(item, {
                validateStatus: function (status) {
                    return status !== 500
                }
            })
                .catch(error => {
                    const findedElement = testData.find(element => element.config.url === error.config.url);

                    if (!findedElement) {
                        testData.push({ ...error })
                    }
                })))

                .then(((res) => {
                    setState({ ...state, data: res, isLoading: false })
                }))

        }
        catch (error) {
            setState({
                ...state,
                hasError: error
            })
        }
    }

    useEffect(() => {

        response()

    }, []);

  
    return {
        state: state,
        testData: testData,
    };
}
