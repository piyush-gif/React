import { useState, useEffect } from "react";
const SimpleApi = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [charInfo, setCharInfo] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchapi = async (url) => {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data", error);
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchapi("https://rickandmortyapi.com/api/character");
  }, []);

  const handleInfo = (char) => {
    setCharInfo(char);
  };
  const handleSearch = async () => {
    if (search === "") return;
    fetchapi(`https://rickandmortyapi.com/api/character/?name=${search}`);
  };

  return (
    <div>
      {loading && <div>loading...</div>}
      {error && <div> error : {error}</div>}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      ></input>
      <button onClick={handleSearch}>search</button>
      {!loading && !error && characters && (
        <div>
          {characters.map((char) => {
            return (
              <div key={char.id}>
                <img src={char.image} alt={char.name} />
                <h3>{char.name}</h3>
                <p>
                  {char.status} - {char.species}
                </p>
                <button onClick={() => handleInfo(char)}>More Info</button>
              </div>
            );
          })}
        </div>
      )}

      {charInfo && (
        <div>
          <div>
            <button onClick={() => setCharInfo(null)}>Close</button>
            <h1>{charInfo.name}</h1>
            <img src={charInfo.image} alt={charInfo.name} />
            <p>Status: {charInfo.status}</p>
            <p>Species: {charInfo.species}</p>
            <p>Gender: {charInfo.gender}</p>
            <p>Origin: {charInfo.origin.name}</p>
            <p>Location: {charInfo.location.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleApi;
