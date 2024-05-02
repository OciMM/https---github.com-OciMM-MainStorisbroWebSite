import React, { useState } from "react";

import MyModal from "./MyModal";
import { Box, Typography } from "@mui/material";
import MyInput from "../input/MyInput";
import ErrorMessage from "../errors/ErrorMessage";
import GradientButton from "../buttons/GradientButton";

import { API_URL } from "../../../constants/constatns";
import axios from 'axios';

// const CONFIRM_LINK = `${API_URL}activate/`;

const EmailConfirmationForm = ({ isEmailConfirm, setIsEmailConfirm, userId, status=false }) => {
  const [error, setError] = useState(false);
  const [code, setCode] = useState("");

  const handleConfirmForm = async () => {
    setIsEmailConfirm(false);
  
    try {
      console.log("Отправка запроса активации:", `${API_URL}activate/${userId}/${code}/`);
      const response = await axios.post(`${API_URL}activate/${userId}/${code}/`);
      status = true;
      if (response.data.message) {
        console.log(response.data.message);
        // Возможно, вам нужно выполнить какие-то действия после успешной активации
      } else {
        console.error(response.data.error);
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <MyModal
      title="Подтверждение почты"
      isFormOpen={isEmailConfirm}
      setIsFormOpen={() => setIsEmailConfirm(false)}
    >
      <Typography sx={{ textAlign: "center" }}>
        Код для активации аккаунта отправили на почту
      </Typography>
      <MyInput label="Введите код" value={code} setValue={setCode} />
      <ErrorMessage error={error} errorMessage="*Неверный код" />
      <Box onClick={() => setIsEmailConfirm(false)}>
        <GradientButton handleClick={handleConfirmForm}>Готово</GradientButton>
      </Box>
    </MyModal>
  );
};

export default EmailConfirmationForm;
