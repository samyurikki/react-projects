import { useEffect, useState } from "react";

const useCustomHooks = (defaultValue) => {
  const [toggle, setToggle] = useState(defaultValue);

  const toggleFun = () => {
    setToggle(!toggle);
  };

  return { toggle, toggleFun };
};

//export default useCustomHooks;

const useCustomData = (url, defaultValue) => {
  const [user, setData] = useState([]);
  const [isLoading, setLoading] = useState(defaultValue);

  const loadingFun = () => {
    setLoading(!isLoading);
  };

  const fetchFun = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    loadingFun();
  };

  useEffect(() => {
    fetchFun();
  }, []);
  return { user, isLoading, setLoading };
};

export default useCustomData;
