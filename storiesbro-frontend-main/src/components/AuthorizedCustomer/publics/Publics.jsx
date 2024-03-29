import React, { useContext, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import arrow from "./images/arrow.svg";
import arrowDown from "./images/arrowDown.svg";
import { PublicsContext } from "../../../context/PublicsContext";
import MyInput from "../../UI/input/MyInput";
import Link from '@mui/material/Link';
import { Tooltips } from "../../Onboardings/Tooltips";

const Publics = () => {
  const [publics] = useContext(PublicsContext);
  const [search, setSearch] = useState("");

  const [count, setCount] = useState(1);

  const handleIncrementCount = () => {
    setCount(count + 1);
    console.log("Count:", count); // Вывод значения count в консоль
  };

  return (
    <Grid container className="grid">
      <Grid item xs={12}>
        <Typography className="title">Список сообществ</Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex" }}>
        <Grid item xs={6}>
          <Grid item md={5}>
            <MyInput value={search} setValue={setSearch} label="Поиск..." />
          </Grid>
        </Grid>

        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Grid
            item
            md={8}
            className="alignCenter"
            sx={{ justifyContent: "flex-end", mt: -2.5 }}
          >
            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                alignItems: "center",
              }}
            >
              <Typography sx={{ color: "#878787", mr: 1 }}>
                Сортировать по
              </Typography>
              <Box className="grayBorder alignCenter" sx={{ p: 1 }}>
                <Typography sx={{ mr: 3 }}>Подписчики</Typography>
                <Box component="img" alt="arrow" src={arrowDown} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {publics.map((publicItem, index) => (
        <Grid
          item
          xs={12}
          key={index}
          className="spaceBetween grayBorder"
          sx={{ p: 2, mb: 2 }}
        >
          <Box className="alignCenter">
            <Box
              component="img"
              alt="publicImg"
              src={publicItem["image"]}
              sx={{ mr: 2, width: "20%" }}
            />
            <Box>
              <Typography className="mdBoldSizeText">
                {publicItem["name"]}
              </Typography>
              <Typography className="mdSizeText">
                {publicItem["count_members"]} подписчиков
              </Typography>
            </Box>
          </Box>
          <Link href={publicItem["url"]}>
          <Box
            component="img"
            alt="arrow"
            src={arrow}
            sx={{ cursor: "pointer" }}
          />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Publics;
