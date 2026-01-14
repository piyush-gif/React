import { useState, useEffect } from "react";
const SimpleApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const respone = await fetch(
          `https://rickandmortyapi.com/api/character/1`
        );
        const data = await respone.json();
        setData(data);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div> error : {error}</div>}
      {!loading && !error && data && (
        <div>
          <h1>{data.name}</h1>
          <img src={data.image} alt={data.name} />
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleApi;
