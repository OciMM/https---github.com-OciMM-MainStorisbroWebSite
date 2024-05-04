import React from "react";
import { Box, Typography } from "@mui/material";

import mca from "./images/mca.png";
import AuthorizedAdminCarusel from "../../UI/myCarousel/AuthorizedAdminCarusel";

const Mca = () => {
  return (
    <Box>
      <Typography className="description">
        <Typography component="span" className="orange bold">
          Стандартные МЦА
        </Typography>{" "}
        - это универсальные развлекательные истории для мужской аудитории.
      </Typography>
      <Typography className="title" sx={{ mt: 4 }}>
        Примеры стандартных МЦА
      </Typography>
      <AuthorizedAdminCarusel image={mca} />
    </Box>
  );
};

export default Mca;
