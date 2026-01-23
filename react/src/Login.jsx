import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = async () => {
    setError("");
    try {
      setLoading(true);
      if (username === "" || password === "") {
        setError("Please enter username and password");
        return;
      }
      const response = await fetch(
        "https://testapi.arctern.everestwalk.com/main/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        },
      );
      if (!response.ok) throw new Error("Login failed");
      const data = await response.json();
      if (!data.data) {
        throw new Error(data.message || "Invalid reponse");
      }
      setAccessToken(data.data.accessToken);
      console.log(data.data);
      localStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken),
      );
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(data.data.refreshToken),
      );
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFetch = async () => {
    setError("");
    try {
      setLoading(true);
      if (accessToken === "") return;
      const response = await fetch(
        "https://testapi.arctern.everestwalk.com/main/api/v1/users/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (!response.ok) throw new Error("failed to fetch data");
      const data = await response.json();
      if (!data) {
        throw new Error(data.message || "Failed to load data");
      }
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      <div>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        ></input>
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <button onClick={handleFetch}>fetch</button>
      </div>

      <div>
        <h1>Data</h1>
        {userData && userData.data.firstName}
      </div>
    </div>
  );
};

export default Login;
