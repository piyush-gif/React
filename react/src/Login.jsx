import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState();

  const handleLogin = () => {};
  return (
    <div>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
