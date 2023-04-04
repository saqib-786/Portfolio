import React from "react";
import Navbar from "../Navbar/Navbar";
import CustomDivider from "../Divider/Divider";
import { Box, Container, Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import 'animate.css';
import '../../App.css'

function CustomHeader() {
 
  return (
    <>
      <header>
        <Navbar title={"Saqib Ali"} />
        <Container
        className="headerContainer"
          maxWidth="xl"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: 'wrap'
          }}
        >
          <Box sx={{ width: {lg:'50%',md:'50%',sm:'50%',xs:'100%'} }}>
            <Typography
            className="animate__animated animate__fadeInDown animate__delay-1s	1s"
              sx={{
                fontSize: { lg: "40px", md: "32px", sm: "20px", xs: "20px" },
                fontWeight: { lg: 600, md: 600, sm: 500, xs: 400 },
              }}
            >
              Front-end Web Developer
            </Typography>
            <CustomDivider
              sx={{ backgroundColor: "white",width:{lg:'300px',md:'200px',sm:'150px',xs:'100px'} }}
            />
            <Typography
            className="animate__animated animate__fadeInLeft animate__delay-2s	2s"
              sx={{
                fontSize: { lg: "18px", md: "18px", sm: "14px", xs: "14px" },
                fontWeight: { lg: 500, md: 400 },
                width: '100%',

              }}
            >
              I can convert any kind of PSD or Figma into React JS and can also
              clone your desired website in React JS, my aim is to build your
              trust and help out to grow your business.
            </Typography>
            <CustomButton
            className="animate__animated animate__fadeInUp animate__delay-3s	3s"
              variant={"contained"}
              sx={{
                backgroundColor: "#6600cc",
                padding: "10px",
                margin: "10px 0px 10px 0px",
                width: { lg: "120px", md: "120px", sm: "100px", xs: "100px" },
                height: "40px",
                "&:hover": { backgroundColor: "#6600cc" },
                fontSize: { lg: "14px", md: "14px", sm: "12px", xs: "12px" },
              }}
            >
              Get Service
            </CustomButton>
            <CustomButton
            className="animate__animated animate__fadeInUp animate__delay-3s	3s"

              sx={{
                color: "white",
                padding: "10px",
                margin: "10px",
                width: { lg: "120px", md: "120px", sm: "100px", xs: "100px" },
                border: "1px solid white",
                height: "40px",
                "&:hover": { border: "1px solid white" },
                fontSize: { lg: "14px", md: "14px", sm: "12px", xs: "12px" },
              }}
              variant={"outlined"}
            >
              Fivver
            </CustomButton>
          </Box>
          <Box sx={{ width: {lg:'50%',md:'50%',sm:'50%',xs:"100%"}, display:'flex', alignItems:'center',justifyContent:'center' }}>
          
            <img   className="animate__animated animate__fadeInRight animate__delay-4s	4s"  width="100%" height="100%"  src="./img-2.png" alt="Coding with JS" />
          </Box>
        </Container>
      </header>
    </>
  );
}

export default CustomHeader;
