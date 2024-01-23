import Logo from "../../extras/logo";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Button, Divider } from "antd";
import { BsCart } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import "./index.scss";
import NavDrawer from "./navdrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleNavDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <NavDrawer open={open} setOpen={setOpen} />
      <div className="navbar-container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-start">
          <Logo />
          <div className="navbar-links">
            <span className="nav-item">Home</span>
            <span className="nav-item">Shop</span>
            <span className="nav-item">About Us</span>
            <span className="nav-item">Blog</span>
            <span className="nav-item">Contact Us</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-10 nav-options">
          <Button
            className="d-flex align-items-center"
            type="default"
            shape="round"
            icon={<RiAccountCircleLine size="20" />}
            size={"large"}
          >
            Login
          </Button>
          <FiSearch className="nav-item" size="20" />
          <BsCart className="nav-item" size="20" />
        </div>
        <CgMenuGridR className="navbar-menu" onClick={toggleNavDrawer} />
      </div>
      <Divider className="divider-margin" />
    </>
  );
};

export default Navbar;
