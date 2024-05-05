import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import MyInput from "../../../UI/input/MyInput";
import MyButton from "../../../UI/buttons/MyButton";
import { addDoubleSticker } from "../../../../api/creatives";

import redirectPng from "../images/redirect.png"

const DoubleStickerLink = () => {
  const [link, setLink] = useState("");
  const [link1, setLink1] = useState("");
  const [title, setTitle] = useState("");

  const user_id = localStorage.getItem("id");

  const handleClickCreative = () => {
    addDoubleSticker(user_id, link, link1, title );
  };

  return (
    <Box className="grid columnCenter">
      <Box
        component="img"
        alt="back"
        src={redirectPng}
        sx={{position: "absolute", float: "left", width: "45px", height: "38"}}
      />
      <Typography className="title">Ссылка-стикер</Typography>
      <Box sx={{ width: { md: "30%", xs: "100%" } }}>
        <Box className="alignCenter">
          <Typography sx={{ mr: 1 }}>№1</Typography>
          <MyInput
            value={link}
            setValue={setLink}
            label="Введите ссылку на историю"
          />
        </Box>
        <Box className="alignCenter">
          <Typography sx={{ mr: 1 }}>№2</Typography>
          <MyInput
            value={link1}
            setValue={setLink1}
            label="Введите ссылку на историю"
          />
        </Box>
        <Box className="alignCenter">
          <Typography sx={{ mr: 4.5 }}> </Typography>
          <MyInput value={title} setValue={setTitle} label="Введите название" />
        </Box>
        <Box sx={{ width: "70%", m: "0 auto" }}>
          <MyButton onClick={handleClickCreative} options={{ background: "#4CD640" }}>Загрузить</MyButton>
        </Box>
      </Box>
    </Box>
  );
};

export default DoubleStickerLink;
