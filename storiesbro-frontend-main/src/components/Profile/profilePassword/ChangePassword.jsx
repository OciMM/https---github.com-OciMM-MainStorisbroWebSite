import { Box } from "@mui/material";
import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import MyButton from "../../UI/buttons/MyButton";
import ErrorMessage from "../../UI/errors/ErrorMessage";
import EmailConfiramtionFormModal from "./modals/EmailConfirmationModal";

const ChangePassword = () => {
  const handleClick = () => {
    if (password !== passwordAgain) {
      setError(true);
    } else {
      setError(false);
      setEmailConfirmation(true);
    }
  };
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState(false);
  const [error, setError] = useState(false);
  return (
    <Box sx={{ width: "50%", m: { lg: 0, xs: "0 auto" } }}>
      <EmailConfiramtionFormModal
        open={emailConfirmation}
        setOpen={setEmailConfirmation}
      />
      <MyInput
        value={password}
        setValue={setPassword}
        label="Введите новый пароль"
        isPassword={true}
      />
      <MyInput
        value={passwordAgain}
        setValue={setPasswordAgain}
        label="Повторите пароль"
        isPassword={true}
      />
      <ErrorMessage error={error} errorMessage="* Пароли не совпадают" />
      <Box sx={{ width: "50%", m: { lg: "5px 0 0", xs: "5px auto" } }}>
        <MyButton
          onClick={handleClick}
          options={{ background: "#4CD640", color: "white" }}
        >
          Готово
        </MyButton>
      </Box>
    </Box>
  );
};

export default ChangePassword;
