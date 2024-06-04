import React, { useState, useEffect } from "react";

const DataFetchingApp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const parsedData = await response.json();
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h1>Data Fetching App</h1>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DataFetchingApp;
