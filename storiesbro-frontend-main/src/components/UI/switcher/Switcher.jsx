import { Box, Switch, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";

const Switcher = ({ ismainpage }) => {
  const [isCustomer, setIsCustomer] = useContext(Context);
  const [statusCustomer, setStatusCustomer] = useState(false)
  // const [statusAdmin, setStatusAdmin] = useState()

  if (isCustomer) {
    localStorage.setItem("statusAccount", "customer")
  } if(!isCustomer) {
    localStorage.setItem("statusAccount", "admin")
  };
  

  return (
    <Box
      sx={{
        display: ismainpage ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { sm: "22px", xs: "15px" },
          fontWeight: 500,
          color: isCustomer && "white",
        }}
      >
        Заказчикам
      </Typography>
      <Switch
        checked={!isCustomer}
        onClick={() => setIsCustomer(!isCustomer)}
      />
      <Typography
        sx={{
          fontSize: { sm: "22px", xs: "15px" },
          fontWeight: 500,
          color: isCustomer && "white",
        }}
      >
        Владельцам сообществ
      </Typography>
    </Box>
  );
};

export default Switcher;
