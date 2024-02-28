import { useState } from 'react';

const useApi = (fetchFunction, params, useResults = true) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErrror] = useState(false);

  const getResults = async () => {
    setIsLoading(true);
    try {
      const { data } = await fetchFunction(params);
      console.log('Data from API:', data);
      setData(useResults ? data.results : data);
      console.log(data);
    } catch (error) {
      setIsErrror(true);
      console.error('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, getResults };
};

export default useApi;
