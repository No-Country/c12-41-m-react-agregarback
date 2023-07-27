import { useEffect, useState } from "react";
import { Authorization, backEnd } from "./axiosBackEnd";

const useFetch = ( path ) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const axiosGet = (path) => {
    backEnd
      .get(`${path}`, Authorization())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.response.data.message)})
  }

  useEffect(() => {
    axiosGet(path)
  }, []);

  const refetch = () => {
    axiosGet(path);
  };

  return { data, error, refetch };
};
export default useFetch;
