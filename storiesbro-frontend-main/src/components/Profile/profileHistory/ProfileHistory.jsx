import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../constants/constatns";

import check from "../../../images/profileImages/alertsHistoryIcons/check.svg";
import cross from "../../../images/profileImages/alertsHistoryIcons/cross.svg";
import MyButton from "../../UI/buttons/MyButton";
import Comment from "./Comment";

const ProfileHistory = () => {

  useEffect(() => {
    // Функция для получения сообществ с бэкенда
    const fetchPublics = async () => {
      try {
        const response = await axios.get(`${API_URL}notification/send-notification/message/${localStorage.getItem('UID')}/`);
        // setListNotification(response.data);
        console.log(response)
      } catch (error) {
        console.error('Ошибка при загрузке уведомлений', error);
      }
    };

    // Вызов функции для загрузки сообществ при монтировании компонента
    fetchPublics();
  }, [localStorage.getItem('UID')]);
  
  const alerts = [
    {
      id: 1,
      isConfirmed: true,
      type: "Модерация креатива",
      date: "18:14",
      content: "Ваш креатив “Пранк-бот” одобрен. Желаем хороших закупов;)",
    },
    {
      id: 2,
      isConfirmed: false,
      type: "Модерация креатива",
      date: "02.08.2023",
      content:
        "Ваш креатив “Пранк-бот” не прошёл проверку. Ознакомьтесь с комментарием и ждём его на проверке снова;)",
      comment: "Исправьте эротический контекст и загрузите креатив снова.",
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [buttonId, setButton] = useState(-1);
  const [listNotification, setListNotification] = useState([]);

  const handleClick = (id) => {
    setIsFormOpen(true);
    setButton(id);
  };

  return (
    <Box sx={{ width: "80%", m: { xs: "0 auto", lg: 0 } }}>
      {alerts.map((alert) => (
        <Box key={alert["id"]}>
          <Comment
            id={alert["id"]}
            buttonId={buttonId}
            comment={alert["comment"]}
            isFormOpen={isFormOpen}
            setIsFormOpen={() => setIsFormOpen(false)}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              border: "1px solid #CBCBCB",
              borderRadius: "10px",
              mb: 2,
              p: 1,
            }}
          >
            <Box
              component="img"
              alt="confirm"
              src={alert["isConfirmed"] ? check : cross}
              sx={{ mt: 0.5, mr: 1 }}
            />

            <Box sx={{ position: "relative", width: "100%" }}>
              <Typography
                sx={{ fontSize: { md: "18px", xs: "14px" }, fontWeight: 500 }}
              >
                {alert["type"]}
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "14px", xs: "12px" },
                  fontWeight: 400,
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
              >
                {alert["date"]}
              </Typography>
              <Typography
                sx={{ fontSize: { md: "14px", xs: "12px" }, fontWeight: 400 }}
              >
                {alert["content"]}
              </Typography>

              {alert["comment"] && (
                <Box sx={{ mt: 2, width: { md: "25%", sm: "50%", xs: "80%" } }}>
                  <MyButton
                    onClick={() => handleClick(alert["id"])}
                    options={{ background: "#E37E31", color: "white" }}
                  >
                    Комментарий
                  </MyButton>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProfileHistory;
