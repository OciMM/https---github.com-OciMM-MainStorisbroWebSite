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
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setTokken } from "../../../store/userReducer";

const REGISTER_LINK = `${API_URL}register/`;

const RegistrationForm = ({
  isRegistrationForm,
  setIsRegistrationForm,
  handleLoginForm,
  handleConfirmForm
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
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRegister = () => {
    axios.post(REGISTER_LINK, { email: email, password: password })
      .then(response => {
        setUserId(response.data.id);
        console.log(response.data.id)  // Получение id пользователя и сохранение его в состоянии
        console.log(userId)
        setIsEmailConfirm(true);
        if(localStorage.getItem('statusActivate') == true) {
          const email_lower = email.toLowerCase()
          axios
            .post(`${API_URL}login/`, {
              email: email_lower,
              password: password,
            }, { withCredentials: true, headers: {
              Authorization: "Bearer " + localStorage.getItem("token"), }
            })
            .then(function (response) {
              setUserId(response.data.id);
              handleConfirmForm(response.data.id)
              // setIsConfirmPageOpen(true);
              // setIsLoginFormOpen(false);
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data["access"];

              localStorage.setItem("token", response.data["access"]);
              localStorage.setItem("refresh", response.data["refresh"])
              localStorage.setItem("id", response.data["id"])
              localStorage.setItem("count_of_visit", response.data["count_of_visit"] + 1)
              dispatch(setTokken(response.data["access"]));
              
              localStorage.removeItem('statusActivate')
              const checkStatus = localStorage.getItem("statusAccount");
                if (checkStatus == "admin") {
                  navigate('/admin');
                } if (checkStatus == "customer") {
                  navigate('/customer');
                };
            })
            .catch(function (error) {
              setError(true); // Устанавливаем флаг ошибки в true при ошибке запроса
            });
        }
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
          label="Придумайте пароль"
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
