import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default App;
