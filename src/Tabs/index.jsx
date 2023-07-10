import React, { useEffect, useState } from "react";
import JobInfo from "./jobInfo";
const url = "https://course-api.com/react-tabs-project";

function TabsApplication() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((each) => (
          <JobInfo key={each.id} {...each} />
        ))}
      </ul>
    </div>
  );
}

export default TabsApplication;
