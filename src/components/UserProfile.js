import React, { useEffect } from "react";
import axios from "axios";
export default function UserProfile({ token }) {
  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    const res = await axios.get("http://api.tunzi.com/v1/api/User", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res.data);
  };

  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}
