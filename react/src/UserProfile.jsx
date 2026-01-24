import { useEffect, useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        console.log(data);
        setUserData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    handleFetch();
  }, []);
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
    </div>
  );
};

export default UserProfile;
