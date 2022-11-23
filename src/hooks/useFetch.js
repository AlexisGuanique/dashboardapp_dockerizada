import { useState, useEffect } from "react";

import { getService } from "../api/getService";
import { getData } from "../helpers/getData";


let testData = [];


export const useFetch = (items, deps = []) => {

    const [state, setState] = useState({
        data: [],
        isLoading: true,
        hasError: false
    })

    useEffect(() => {
        try {
            Promise.all(items.map((item) => getService.get(item, {
                validateStatus: function (status) {
                    return status !== 500
                }
            })
                .catch(error => {
                    setState({ ...state, isLoading: false, data: error })
                    testData.push({ ...error })

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
    }, [])


    // console.log(state);
    // console.log(testData);

    const data = getData(state, testData)


    return {
        data: data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}






