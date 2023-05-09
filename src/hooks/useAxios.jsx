import axios from "axios";
import React, { useState, useEffect } from "react";

const useAxios = (url, den) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setResponse(res);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(fetchData(), den ? [...den] : []);

  return {
    response,
    isloading,
    error,
  };
};
export default useAxios;
