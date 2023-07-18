import { useEffect, useState } from "react";
import { Authorization, backEnd } from "./axiosBackEnd";

const useFetch = ( path ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    backEnd
      .get(`${path}`, Authorization())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err)
        setError(err.response.data.message)})
      .finally(setLoading(false));
  }, []);

  return { data, loading, error };
};
export default useFetch;
