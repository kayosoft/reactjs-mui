import React, { useEffect } from "react";
import axios from "axios";
export default function SigninScreen({ token }) {
  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token) => {
    const res = await axios.get("http://api.tunzi.com/v1/api/Signin", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(res.data);
  };

  return (
    <div>
      <h1>SignIn</h1>
    </div>
  );
}
