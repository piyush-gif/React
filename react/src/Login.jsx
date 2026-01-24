import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, []);

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
      localStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken),
      );
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(data.data.refreshToken),
      );
      navigate("/profile");
    } catch (error) {
      console.error(error.message);
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
    </div>
  );
};

export default Login;
