import React, { useState } from "react";
import MyModal from "./MyModal";

import MyInput from "../input/MyInput";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";
import GradientButton from "../buttons/GradientButton";
import EmailConfirmationForm from "./EmailConfiramtionForm";
import axios from "axios";
import { API_URL } from "../../../constants/constatns";

const REGISTER_LINK = `${API_URL}register/`;

const RegistrationForm = ({
  isRegistrationForm,
  setIsRegistrationForm,
  handleLoginForm,
}) => {
  const handleConfirmEmail = () => {
    setIsRegistrationForm(false);
    setIsEmailConfirm(true);
    setIsChecked(false);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationForm(false);
    setIsChecked(false);
  };
  const [userId, setUserId] = useState(null);

  const handleRegister = () => {
    axios.post(REGISTER_LINK, { email: email, password: password })
      .then(response => {
        setUserId(response.data.id);
        console.log(response.data.id)  // Получение id пользователя и сохранение его в состоянии
        console.log(userId)
        setIsEmailConfirm(true);
      })
      .catch(error => {
        console.error("Ошибка регистрации:", error);
      });
  };

  const [isChecked, setIsChecked] = useState(false);
  const [isEmailConfirm, setIsEmailConfirm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <EmailConfirmationForm
        isEmailConfirm={isEmailConfirm}
        setIsEmailConfirm={setIsEmailConfirm}
        userId={userId}  // Передайте userId в компонент EmailConfirmationForm
      />
      <MyModal
        title="Регистрация"
        isFormOpen={isRegistrationForm}
        setIsFormOpen={handleCloseRegistration}
      >
        <MyInput label="Введите почту" value={email} setValue={setEmail} />
        <MyInput
          label="Прилдумайте пароль"
          isPassword={true}
          value={password}
          setValue={setPassword}
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <Typography>
              Согласны с <Link>правилами пользования</Link> и{" "}
              <Link>политикой конфиденциальности</Link>
            </Typography>
          }
          onChange={() => setIsChecked(!isChecked)}
        />
        <Box
          onClick={() => handleConfirmEmail()}
          sx={{ width: "300px", m: "20px auto" }}
        >
          <GradientButton
            handleClick={handleRegister}
            height="52px"
            disabled={!isChecked}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Зарегистрироваться
            </Typography>
          </GradientButton>
        </Box>
        <Typography sx={{ textAlign: "center" }}>
          Есть аккаунт?
          <Link onClick={() => handleLoginForm()} sx={{ cursor: "pointer" }}>
            Войти
          </Link>
        </Typography>
      </MyModal>
    </>
  );
};

export default RegistrationForm;
