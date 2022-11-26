import { useState, useEffect } from 'react';

import { getService } from '../api/getService';
import { getCompare } from '../helpers/getCompare';
import { getData } from '../helpers/getData';
import { getStorage } from '../helpers/getStorage';

const testData = [];

const dataToSave = [];

export default function useFetch(items) {
  const { setLocalStorage } = getStorage();

  const [state, setState] = useState({
    data: [],
    isLoading: true,
    hasError: false,
  });

  const response = () => {
    setInterval(() => {
      try {
        Promise.all(
          items.map((item) => getService
            .get(item, {
              validateStatus(status) {
                return status !== 500;
              },
            })
            .catch((error) => {
              const findedElement = testData.find(
                (element) => element.config.url === error.config.url,
              );

              if (!findedElement) {
                testData.push({ ...error });
              }
            })),
        ).then((res) => {
          setState({ ...state, data: res, isLoading: false });
        });
      } catch (error) {
        setState({
          ...state,
          hasError: error,
        });
      }
    }, 12000);
  };

  useEffect(() => {
    response();
  }, []);

  console.log(state);

  const date = new Date();

  const [month, day, year, hour, minute, second] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const horaActual = `${day}/${month}/${year} - ${hour}:${minute}:${second} h`;

  state.data.forEach((item) => {
    if (item && item.status === 200) {
      const findedElement = dataToSave.find(
        (element) => element?.path === item?.config?.url,
      );
      if (!findedElement) {
        dataToSave.push({
          path: item.config.url,
          status: item.status,
          date: horaActual,
        });
      }
    }
  });

  const parsedData = getCompare(dataToSave, state);
  console.log(parsedData);

  const data = getData(state, testData);

  return {
    data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
