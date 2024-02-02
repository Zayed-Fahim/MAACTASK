import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const token = Cookies.get("token")?.split(" ")[1];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);

        const response = await axios.get(
          "https://maactask-server.vercel.app/api/v1/users/login/verify",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data.status === "Success") {
          setUser(response.data.payload.newUserData);
        } else {
          console.error("Error fetching user data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  const sharedValue = {
    user,
    setUser,
    isLoading,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={sharedValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
