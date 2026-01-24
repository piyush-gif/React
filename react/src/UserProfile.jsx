import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleFetch = async () => {
      setError("");
      try {
        setLoading(true);
        const accessToken = JSON.parse(localStorage.getItem("accessToken"));
        if (!accessToken) throw new Error("Not authenticated");
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
        setUserData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };
  return (
    <div>
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      <div>
        {userData && (
          <div>
            <p>First name : {userData.firstName}</p>
            <p>city : {userData.partner.city}</p>
            <p>status: {userData.status}</p>
            <p>employee Id: {userData.employeeId}</p>
          </div>
        )}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
