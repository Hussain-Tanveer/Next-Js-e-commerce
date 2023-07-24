"use client";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";

import Link from "next/link";
import Button from "../Button/Button";
import classes from "./Header.module.css";
// mui
import { LogoE } from "@/app/Constant/ImagePath";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const location = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const isLogin = true;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async () => {};

  return (
    <>
      <div className={classes.mainSection}>
        <Container>
          <div className={classes.navBarMain}>
            <div
              onClick={() => router.push("/")}
              className={classes.sideLogoMain}
            >
              <div className={classes.logoMian}>
                <Image
                  src={LogoE}
                  //   width={500}
                  //   height={800}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <ul>
              <li>
                <Link
                  className={location == "/" && classes.activeClass}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location == "/pages/about-us" && classes.activeClass
                  }
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  className={
                    location == `/pages/product` && classes.activeClass
                  }
                  href={`/pages/product`}
                >
                  Product
                </Link>
              </li>

              <li>
                <Link
                  className={
                    location == "/pages/contact-us" && classes.activeClass
                  }
                  href="/pages/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              {!isLogin ? (
                <>
                  <Button
                    onClick={() => router.push("/login")}
                    className={classes.productBtn}
                    label={"Login"}
                  />
                  <Button
                    onClick={() => router.push("/signup")}
                    className={classes.productBtn}
                    label={"Signup"}
                  />
                </>
              ) : (
                <>
                  {/* mui */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{
                          ml: 2,
                          width: 40,
                          height: 40,
                          background: "var(--main-color)",
                        }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <Avatar
                          sx={{
                            width: 40,
                            height: 40,
                            background: "var(--main-color)",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "top center",
                            }}
                            src={"https://picsum.photos/200/300"}
                          />
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                    {!open && (
                      <div className={classes.downArrow}>
                        <MdKeyboardArrowDown
                          color="var(--main-color)"
                          size={30}
                        />
                      </div>
                    )}
                  </Box>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem
                      onClick={() => {
                        router.push("/update-profile");
                        handleClose();
                      }}
                    >
                      <Avatar style={{ background: "var(--main-color)" }}>
                        <CgProfile color="var(--white-color)" size={20} />
                      </Avatar>
                      Dashobard
                    </MenuItem>

                    <Divider />
                    <MenuItem
                      onClick={() => {
                        handleLogout();
                        handleClose();
                      }}
                    >
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
