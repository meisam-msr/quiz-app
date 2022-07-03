import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setResponse(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
