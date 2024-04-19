import React, { useState } from "react";
import MyModal from "../../../UI/modals/MyModal";
import { Box, Typography } from "@mui/material";
import MyInput from "../../../UI/input/MyInput";
import MyButton from "../../../UI/buttons/MyButton";
import ErrorMessage from "../../../UI/errors/ErrorMessage";

import axios from "axios";
import { API_URL } from "../../../../constants/constatns";

const EmailConfiramtionFormModal = ({ open, setOpen }) => {

  // const fetchPublics = async () => {
  //   try {
  //     const response = await axios.get(`${API_URL}api_communities/communities`);
  //     setAllPublics(response.data);
  //   } catch (error) {
  //     console.error('Ошибка при загрузке сообществ', error);
  //   }
  // };

  const handleClick = async () => {
    try {
      const response = await axios.get(`${API_URL}password_change/${localStorage.getItem('email')}/`);
      // setAllPublics(response.data);
      console.log(response);
    } catch (error) {
      console.error('Ошибка', error);
    }
    if (code !== rightCode) {
      setError(true);
    } else {
      setError(false);
      setOpen(false);
      setCode("");
    }
  };

  const handleClose = () => {
    setOpen(false);
    setError(false);
    setCode("");
  };

  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const rightCode = "1111";
  return (
    <MyModal
      width={{ xs: "90%", md: "50%", lg: "30%" }}
      title="Подтверждение"
      isFormOpen={open}
      setIsFormOpen={handleClose}
    >
      <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
        Для изменения пароля, введите код, отправленный на почту
        {localStorage.getItem('email')}
      </Typography>
      <Box sx={{ width: "50%", m: "20px auto" }}>
        <MyInput label="Введите код" value={code} setValue={setCode} />
        <ErrorMessage error={error} errorMessage="* Неверный код" />
        <MyButton
          onClick={handleClick}
          options={{ background: "#4CD640", color: "white" }}
        >
          Готово
        </MyButton>
      </Box>
    </MyModal>
  );
};

export default EmailConfiramtionFormModal;
