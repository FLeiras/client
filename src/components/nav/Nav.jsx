import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { BsArrowDownCircle } from "react-icons/bs";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav_container">
      <Link className="nav_about" to="/home">
        <AiOutlineHome className="icon" />
      </Link>
      <Link className="nav_about" to="/about">
        <AiOutlineUser className="icon" />
      </Link>
      <Link className="nav_post" to="/post">
        <AiFillEdit className="icon" />
      </Link>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Nav;
