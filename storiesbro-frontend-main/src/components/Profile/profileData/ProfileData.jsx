import { Box, Button } from "@mui/material";
import React from "react";
import ProfileName from "./ProfileName";
import ProfileEmail from "./ProfileEmail";
import ProfileButton from "./ProfileButton";

const ProfileData = () => {
  return (
    <Box
      sx={{
        width: { md: "40%", sm: "60%", xs: "90%" },
        m: { xs: "0 auto", lg: 0 },
      }}
    >
      <ProfileName />
      <ProfileEmail />
      <ProfileButton />
      <Button>Сохранить</Button>
    </Box>
  );
};

export default ProfileData;
