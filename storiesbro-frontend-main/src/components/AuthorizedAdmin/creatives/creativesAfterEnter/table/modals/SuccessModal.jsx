import React, { useState } from "react";
import MyModal from "../../../../../UI/modals/MyModal";
import { Box, Typography } from "@mui/material";
import MyButton from "../../../../../UI/buttons/MyButton";
import NoPermissionModal from "./NoPermissionModal";

const SuccessModal = ({ open, setOpen }) => {
  return (
    <>
      <MyModal
        width="100%"
        isFormOpen={open}
        setIsFormOpen={() => setOpen(false)}
      >
        <Typography className="mdSizeText" sx={{ textAlign: "center", mb: 2 }}>
          Отлично, как права будут выданы - загружайте сообщество снова;{")"}
        </Typography>
        <Box sx={{ width: "50%", m: "0 auto" }}>
          <MyButton
            onClick={() => setOpen(false)}
            options={{ background: "#4CD640" }}
          >
            Ок
          </MyButton>
        </Box>
      </MyModal>
    </>
  );
};

export default SuccessModal;
