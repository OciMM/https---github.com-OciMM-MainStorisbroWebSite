import React from "react";
import AuthorizedAdminCarusel from "../../UI/myCarousel/AuthorizedAdminCarusel";

// import jca from "./images/jca.png";
import { Box, Typography } from "@mui/material";

const Jca = () => {
  return (
    <Box>
      <Typography className="description">
        {" "}
        <Typography component="span" className="orange bold">
          Стандартные ЖЦА{" "}
        </Typography>
        - это универсальные развлекательные истории для женской аудитории
      </Typography>
      <Typography className="title" sx={{ mt: 4 }}>
        Примеры стандартных ЖЦА
      </Typography>
      {/* <AuthorizedAdminCarusel image={jca} /> */}
    </Box>
  );
};

export default Jca;
