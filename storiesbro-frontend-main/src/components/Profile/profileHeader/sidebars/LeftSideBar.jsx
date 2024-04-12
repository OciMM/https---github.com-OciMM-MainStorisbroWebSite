import { Box, Divider, Modal, Typography } from "@mui/material";
import React from "react";

import flash from "./sidebarIcons/flash.svg";
import list from "./sidebarIcons/list.svg";
import lock from "./sidebarIcons/lock.svg";
import messageQuestion from "./sidebarIcons/messageQuestion.svg";
import moneys from "./sidebarIcons/moneys.svg";
import tagUser from "./sidebarIcons/tagUser.svg";
import logo from "./sidebarIcons/logo.svg";
import cross from "./sidebarIcons/cross.svg";
import MyButton from "../../../UI/buttons/MyButton";
import { Link, NavLink } from "react-router-dom";

const LeftSideBar = ({ open, setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        width: "240px",
        height: "100vh",
        background: "white",
      }}
    >
      <Box sx={{ background: "white", outline: "none" }}>
        <Box
          sx={{
            width: "100%",
            display: { xs: "flex", lg: "none" },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            alt="cross"
            src={cross}
            onClick={() => setOpen(false)}
            sx={{ cursor: "pointer", mr: 2, ml: 1 }}
          />
          <Box component="img" alt="logo" src={logo} />
        </Box>
        <Divider sx={{ display: { xs: "flex", lg: "none" } }} />
        <Box
          sx={{
            mt: 2,
            ml: 2,
            display: { xs: "flex", flexDirection: "column", lg: "none" },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", fontWeight: 400 }}
          >
            0
            <Typography component="span" sx={{ fontWeight: 600 }}>
              ₽
            </Typography>
          </Typography>
          <Box sx={{ width: "75%" }}>
            <MyButton options={{ background: "#E37E31", color: "white" }}>
            <Link to="/cash" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white" }}>Пополнить</Typography>
            </Link>
            </MyButton>
          </Box>
        </Box>
        <Box
          sx={{
            background: "white",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            pt: { xs: 2, lg: 20 },
            pl: 2,
            outline: "none",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box component="img" alt="flash" src={flash} sx={{ mr: 1 }} />
            <Typography className="menuItem"><NavLink to="/creatives">Креативы</NavLink></Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box component="img" alt="lock" src={lock} sx={{ mr: 1 }} />
            <Typography className="menuItem"><NavLink to="/reservations">Брони</NavLink></Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box component="img" alt="list" src={list} sx={{ mr: 1 }} />
            <Typography className="menuItem"><NavLink to="/customer-publics">Список сообществ</NavLink></Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box component="img" alt="moneys" src={moneys} sx={{ mr: 1 }} />
            <Typography className="menuItem"><NavLink to="/customer-referal">Реф. система</NavLink></Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              component="img"
              alt="messageQuestion"
              src={messageQuestion}
              sx={{ mr: 1 }}
            />
            <Typography className="menuItem"><NavLink to="/customer-help">Помощь</NavLink></Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box component="img" alt="tagUser" src={tagUser} sx={{ mr: 1 }} />
            <Typography className="menuItem"><NavLink to="/customer-support">Тех. поддержка</NavLink></Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default LeftSideBar;
