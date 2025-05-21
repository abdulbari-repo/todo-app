import React from "react";
import "./Footer.css";
import playList from "../../assets/Playlist.png";
import tick from "../../assets/Tick.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container footer">
        <div className="footer-box">
          <Link to="/">
          <img src={playList} alt="" />
            <p>All</p>
          </Link>
        </div>
        <div className="footer-box">
          <Link to="/complete-task">
          <img src={tick} alt="" />
          <p>Completed</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
