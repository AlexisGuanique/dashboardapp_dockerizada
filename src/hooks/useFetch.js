import { useState, useEffect } from "react";

import { getService } from "../api/getService";
import { getData } from "../helpers/getData";


const testData = [];


export const useFetch = (items) => {

    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: false
    })

    const response = () => {
        setInterval(() => {
            try {
                Promise.all(items.map((item) => getService.get(item, {
                    validateStatus: function (status) {
                        return status !== 500
                    }
                })
                    .catch(error => {
                        const findedElement = testData.find(element => element.config.url === error.config.url);

                        // console.log('error: ' + JSON.stringify(findedElement))

                        if(!findedElement) {
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
        }, 11000);
    }

    useEffect(() => {

        response()

    }, [])

    // console.log(testData)


    const data = getData(state, testData)

    return {
        data: data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}







