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
      Our goal is to create a community where gamers can share their favorite gaming titles, strategies, and screenshots from their virtual adventures. We believe that gaming is a means to connect people across diverse backgrounds and cultures, fostering a sense of camaraderie and shared experiences.
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
