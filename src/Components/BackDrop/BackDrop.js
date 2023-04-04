import * as React from "react";
import { Box } from "@mui/material";
import 'animate.css';

const Style = {
  position: "absolute",
  // zIndex: 5555555,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  // display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection:'column',
  borderRadius:"10px",
  display:'none'

  
};

export default function Backdrop({children,...otherProps}) {
  
  return (
    <>
        <Box
        {...otherProps}
          sx={{
            height: { lg: "250px", md: "200px", sm: "200px", xs: "200px" },
            width: { lg: "450px", md: "260px", sm: "230px" },
          }}
         
          style={Style}
        >
          {children}
        </Box>
      
    </>
  );
}
