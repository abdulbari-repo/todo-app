import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { BsCalendar2 } from "react-icons/bs";

const Navbar = () => {
  const [date, setDate] = useState("");

  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    setDate(day.toString());
  };

  useEffect(() => {
    getCurrentDate(); 
    // localStorage.removeItem('isLoggedIn')
  }, []);
  return (
    <>
      <div className="navbar">
        <div>
          <h1>TODO APP</h1>
        </div>
        <div>
          <div className="calendar-wrapper">
            <BsCalendar2 className="calendar-icon" />
            {date && <span className="calendar-date">{date}</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
