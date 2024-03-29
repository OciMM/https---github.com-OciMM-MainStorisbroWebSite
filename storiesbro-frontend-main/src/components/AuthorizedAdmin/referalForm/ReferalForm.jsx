import React from "react";
import { Box, Link, Typography } from "@mui/material";

import copy from "./images/copy.svg";
import people from "./images/people.svg";
import money from "./images/money.svg";
import scrooge from "./images/scrooge.svg";

const ReferalForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        className="centerText w600"
        sx={{ mb: 2, mt: 5, fontSize: "16px" }}
      >
        Ваша реферальная ссылка
      </Typography>
      <Box
        className="centerForm grayBorder spaceBetween"
        sx={{ width: { md: "30%", xs: "100%" } }}
      >
        <Link
          sx={{ fontSize: { md: "18px", xs: "14px" }, textAlign: "center" }}
        >
          Storisbro.com/?_ref=2Rh46f3L
        </Link>
        <Box component="img" alt="copy" src={copy} sx={{ cursor: "pointer" }} />
      </Box>
      <Typography
        className="centerText w600"
        sx={{ mb: 2, mt: 5, fontSize: { xs: "16px", md: "18px" } }}
      >
        Статистика ссылки
      </Typography>
      <Box
        className="centerForm50"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box className="alignCenter" sx={{ width: "25%", mb: 2 }}>
          <Box component="img" alt="people" src={people} />
          <Typography className="sm500" sx={{ ml: 1 }}>
            Зарегистрировано: 0 человек
          </Typography>
        </Box>
        <Box className="alignCenter" sx={{ width: "25%" }}>
          <Box component="img" alt="money" src={money} />
          <Typography className="sm500" sx={{ ml: 1 }}>
            Заработано: 0₽
          </Typography>
        </Box>
      </Box>
      <Box
        component="img"
        alt="scrooge"
        src={scrooge}
        sx={{ m: "50px auto", width: { md: "50%", xs: "40%" } }}
      />
    </Box>
  );
};

export default ReferalForm;
