import { Divider, Drawer } from "antd";
import Logo from "../../extras/logo";
import { CloseOutlined } from "@ant-design/icons";

type drawerProps = {
  open: boolean;
  setOpen: any;
};

const NavDrawer = ({ open, setOpen }: drawerProps) => {
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title=""
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
        style={{ position: "relative" }}
      >
        <div className="d-flex align-items-center justify-content-start flex-column position-relative">
          <Logo classname="drawer-logo" />
          <CloseOutlined onClick={onClose} className="close-icon-nav" />
          <div className="navbar-links2 d-flex align-items-center justify-content-center flex-column">
            <span className="nav-item">Home</span>
            <span className="nav-item">Shop</span>
            <span className="nav-item">About Us</span>
            <span className="nav-item">Blog</span>
            <span className="nav-item">Contact Us</span>
            <Divider />
            <span className="nav-item">Login</span>
            <span className="nav-item">Search</span>
            <span className="nav-item">Cart</span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavDrawer;
