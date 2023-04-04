import React from "react";
import CustomHeader from "../Components/Header/CustomHeader";
import CustomSection from "../Components/CustomSection/CustomSection";
import CustomText from "../Components/CustomText/CustomText";
import H1Typo from "../Components/Typography/H1Typo";
import CustomDivider from "../Components/Divider/Divider";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SkillSet from "../Components/SkillSet/SkillSet";
import MyProjects from "../Components/MyProjects/MyProjects";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/Footer";


function Home() {
  return (
    <>
      <CustomHeader />
      <CustomSection sx={{ marginTop: "20px" }}>
        <CustomText
          sx={{
            color: "#6600cc",
            fontSize: "16px",
            fontWeight: 500,
            margin: "20px 10px 0px 10px",
            
          }}
        >
          Who am I ?
        </CustomText>
        <H1Typo
          sx={{
            // margin: "10px",
            fontSize: { lg: "32px", md: "32px", sm: "24px", xs: "24px" },
          }}
        >
          Saqib Ali
        </H1Typo>
        <CustomDivider
          sx={{ width: {lg:'60px',md:'50px',sm:'50px',xs:'40px'}, backgroundColor: "#6600cc",margin:'0px 0px 0px 20px' }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          component={"div"}
        >
          <Box sx={{ width: { lg: "50%", md: "50%", sm: "50%", xs: "100%" } }}>
            <Typography
              sx={{
                fontSize: { lg: "18px", md: "16px", sm: "14px", xs: "14px" },
                width: { lg: "90%", xs: "100%" },
                marginBottom:{lg:'0px',md:'0px',sm:'0px',xs:'20px'}
              }}
            >
              My name is Saqib Ali and I am from Pakistan. Basically I am a
              front-end web developer my main aim to develop responsive web apps
              using
              <span style={{ color: "#6600cc" }}> React JS</span> and help out
              to large or small companies and startups.
            </Typography>
          </Box>
          <Box sx={{ width: { lg: "50%", md: "50%", sm: "50%", xs: "100%" } }}>
            <Typography
              sx={{
                fontSize: { lg: "18px", md: "16px", sm: "14px", xs: "14px" },
                width: { lg: "90%", xs: "100%" },

              }}
            >
              I am working as front-end developer more than one year and
              generally I use{" "}
              <span style={{ color: "#6600cc" }}> React JS </span>
              and <span style={{ color: "#6600cc" }}>Material UI</span> for
              front-end development. I assure you to provide responsive and
              pixel perfect layout with clean and reuseable code.
            </Typography>
            <br />
            <Typography
              sx={{
                fontSize: { lg: "18px", md: "16px", sm: "14px", xs: "14px" },
                width: { lg: "90%", xs: "100%" },
              }}
            >
              If you have any query or you want to hire me so please use contact
              form given below. I'll try my level best to reach you as soon as
              posible
            </Typography>
          </Box>
        </Box>
      </CustomSection>
      <SkillSet/>
      <MyProjects/>
      <ContactForm/>
      <Footer/>
     
    </>
  );
}

export default Home;
