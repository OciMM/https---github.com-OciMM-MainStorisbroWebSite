import React from "react";
import { Box, Typography } from "@mui/material";

// import vca from "./images/vca.png";
import AuthorizedAdminCarusel from "../../UI/myCarousel/AuthorizedAdminCarusel";

const Vca = () => {
  return (
    <Box>
      <Typography className="description">
        <Typography component="span" className="orange bold">
          Стандартные ВЦА
        </Typography>{" "}
        - это универсальные развлекательные истории для мужской и женской
        аудитории старше 25 лет.
      </Typography>
      <Typography className="title" sx={{ mt: 4 }}>
        Примеры стандартных ВЦА
      </Typography>
      {/* <AuthorizedAdminCarusel image={vca} /> */}
    </Box>
  );
};

export default Vca;
