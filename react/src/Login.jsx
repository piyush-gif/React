import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [userData, setUserData] = useState(null);
  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://testapi.arctern.everestwalk.com/main/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        },
      );
      const data = await response.json();
      setAccessToken(data.data.accessToken);
      console.log(data);
    } catch (error) {
      console.error("failed to login error : ", { error });
    }
  };

  const handleFetch = async () => {
    try {
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
      const data = await response.json();
      setUserData(data);
      console.log(data);
    } catch (error) {
      console.error("failed to fetch data error : ", error);
    }
  };
  return (
    <div>
      <div>
        <input
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
