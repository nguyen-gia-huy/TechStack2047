import React, { useContext } from "react";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Import biểu tượng ngôi nhà
import { ProfileContext } from "../../ProfileContext"; // Giả sử bạn dùng ProfileContext để lấy avatar

const Navigation = () => {
  // const { profileData } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");

    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/profile");
  };

  return (
    <div className="container-nav" >
      <div className="right-top-nav" style={{justifyContent:'flex-start', display:'flex' }}>
        <h1>Your page</h1>
        <Link to="/defaultPage">
          <FontAwesomeIcon
            style={{ marginLeft:15 ,marginTop: 5, fontSize: 40 }}
            icon={faHouse}
          />
        </Link>
      </div>
    
      <div className="left-top-nav"  >
        <button onClick={handleLogout}>Logout</button>
        {/* Thay thế thẻ span bằng thẻ img */}
        {/* <img
          onClick={handleLogoClick}
          style={{
            cursor: "pointer",
            width: 50,
            height: 50,
            borderRadius: "50%",
          }}
          src={profileData?.avatar || "default-avatar-url"} // Lấy avatar từ profileData
          alt="Avatar"
        /> */}
      </div>
    </div>
  );
};

export default Navigation;