import React, { useState } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../../images/icons/commonIcons/logo.svg";
import humanProfile from "../../../images/icons/humanProfile.svg";
import MyButton from "../../UI/buttons/MyButton";
import LeftSideBar from "./sidebars/LeftSideBar";
import RightSideBar from "./sidebars/RightSideBar";

import "./sidebars/sidebarStyles/style.css";

const ProfileHeader = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: { md: "0 130px", xs: 0 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuIcon
            sx={{ mr: { md: 5, xs: 0 }, cursor: "pointer" }}
            onClick={() => setLeftSidebarOpen(true)}
          />

          <LeftSideBar open={leftSidebarOpen} setOpen={setLeftSidebarOpen} />
          <RightSideBar open={rightSidebarOpen} setOpen={setRightSidebarOpen} />
          <Box
            component="img"
            alt="logo"
            src={logo}
            sx={{ display: { lg: "block", xs: "none" } }}
          />
        </Box>
        <Box
          component="img"
          alt="logo"
          src={logo}
          sx={{ display: { xs: "block", lg: "none" } }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { md: "15%", xs: "fit-content" },
          }}
        >
          <Box sx={{ width: "70%", display: { lg: "block", xs: "none" } }}>
            <MyButton
              options={{ background: "#E68B46", color: "white", mr: 1 }}
            >
              Пополнить
            </MyButton>
          </Box>
          <Box sx={{ display: { lg: "block", xs: "none" } }}>0р</Box>
          <Box
            component="img"
            alt="prfile"
            src={humanProfile}
            onClick={() => setRightSidebarOpen(true)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProfileHeader;
