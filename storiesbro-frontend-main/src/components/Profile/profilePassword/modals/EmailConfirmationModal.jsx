import React, { useState } from "react";
import MyModal from "../../../UI/modals/MyModal";
import { Box, Typography } from "@mui/material";
import MyInput from "../../../UI/input/MyInput";
import MyButton from "../../../UI/buttons/MyButton";
import ErrorMessage from "../../../UI/errors/ErrorMessage";

const EmailConfiramtionFormModal = ({ open, setOpen }) => {
  const handleClick = () => {
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
        gausaaa@gmail.com
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
