import React, { useEffect, useState } from "react";
import { supabase } from "../../client";
import { Link } from "react-router-dom";
import "./style.css";

export const Home = () => {
  const [userData, setUserData] = useState(null);

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setUserData(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error.message);
        handleSignout();
      } else if (user) setUserData(user);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (userData) {
      window.location.href = "/dashboard";
    }
  }, [userData]);

  return (
    <div className="Content">
      <p className="description">
      Our mission is to establish a platform where users can share captivating images of places they find intriguing, along with descriptions and travel tips. We believe that showcasing these places fosters connections among people from various backgrounds and cultures, encouraging shared experiences and a sense of community.
      </p>
      <br />
      <div>
        <Link to="/login" className="button">
          Join us
        </Link>
      </div>
    </div>
  );
};
