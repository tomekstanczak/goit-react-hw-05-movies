import { useState } from 'react';
import axios from 'axios';

const useApi = apiUrl => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsErrror] = useState(false);

  const getResaults = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(apiUrl);
      console.log(data);
      setData(data.results);
    } catch (error) {
      setIsErrror(true);
      console.error('error');
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, isError, getResaults };
};

export default useApi;
