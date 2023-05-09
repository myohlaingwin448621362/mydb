import { useState, useEffect } from "react";
import axios from "axios";

export const useCustomHook = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, data };
};
