/*import useCustomHooks from "./customHook";

const ToggleComponent = () => {
  const { toggle, toggleFun } = useCustomHooks(true);
  return (
    <>
      <h3>Custom Hooks</h3>
      <button type="button" onClick={toggleFun}>
        Toggle
      </button>
      {toggle && <h3>some Component</h3>}
    </>
  );
};

export default ToggleComponent; */

import { useEffect, useState } from "react";
import useCustomData from "./customHook";

const url = "https://api.github.com/users/QuincyLarson";

const FetchData = () => {
  const { user, isLoading, setLoading } = useCustomData(url, true);
  /*const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  // order matters
  // don't place user JSX before loading or error
  */

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  //   if (isError) {
  //     return <h2>There was an error...</h2>;
  //   }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "100px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default FetchData;
