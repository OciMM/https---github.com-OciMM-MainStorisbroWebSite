import { Box, Switch, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const Switcher = ({ ismainpage }) => {
  const [isCustomer, setIsCustomer] = useContext(Context);

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
