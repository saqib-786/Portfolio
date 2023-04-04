import React from "react";
import { Typography } from "@mui/material";

function CustomText({ children, ...otherProps }) {
  return (
    <>
      <Typography
        sx={{
          fontSize: { lg: "18px", md: "16px", sm: "14px", xs: "14px" },
          color: "#6600cc",
          
        }}
        {...otherProps}
      >
        {children}
      </Typography>
    </>
  );
}

export default CustomText;
