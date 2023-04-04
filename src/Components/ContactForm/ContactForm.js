import { Container, Grid, TextField, Box, styled } from "@mui/material";
import CustomText from "../CustomText/CustomText";
import React from "react";
import H1Typo from "../Typography/H1Typo";
import CustomDivider from "../Divider/Divider";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";

const CustomField = styled(TextField)(() => ({
  width: '80%',
  borderBottom: "1px solid #6600cc",
  
  
}));
function ContactForm() {
  const [user, setUser] = useState({
    userName:'',
    email:'',
    contactNum: '',
    company:'',
    msg: ''
  })
  console.log(user.userName)
  const handelSend = ()=>{
    console.log(user)
  }
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "200px",
          backgroundColor: "whitesmoke",
          boxShadow: "5px 10px 8px 10px gray",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        minHeight: "500px",
        }}
      >
        <Box>
          <CustomText sx={{ textAlign: "center", color: "#6600cc" }}>
            Contact Me
          </CustomText>
          <H1Typo
            sx={{
              fontSize: { lg: "32px", md: "32px", sm: "24px", xs: "24px" },
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Let's Talk
          </H1Typo>
          <center>
          <CustomDivider
            sx={{ backgroundColor: "#6600cc", width: {lg:'100px',md:"100px",sm:'80px',xs:'70px'}}}
          />
          </center>
        </Box>
       <form>
       <Grid
          sx={{ marginTop: "40px", padding: "0px 30px 0px 30px" }}
          container
          spacing={2}
        >
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomField value={user.userName} onChange={(e)=>setUser({userName:e.target.value})} required label="Name" variant="standard" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomField value={user.email} onChange={(e)=>setUser({email:e.target.value})} required label="Email" variant="standard" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomField value={user.contactNum} onChange={(e)=>setUser({contactNum:e.target.value})} required label="Contact Number" variant="standard" />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <CustomField value={user.company} onChange={(e)=>setUser({company:e.target.value})} required label="Company" variant="standard" />
          </Grid>

          <Grid mt={5} item lg={12} md={12} sm={12} xs={12}>
            <center>
              <TextField value={user.msg} onChange={(e)=>setUser({msg:e.target.value})} sx={{width:'100%',borderBottom:"1px solid #6600cc"}} label="Questoin to me" variant="standard" />
            </center>
          </Grid>
        </Grid>
        <center>
          <CustomButton
          onClick={handelSend}
           type="submit"
            variant={"contained"}
            sx={{
              marginTop: "50px",
              padding: "10px",
              minWidth:'150px',
              borderRadius: "25px",
            }}
          >
            Send Message
          </CustomButton>
        </center>
       </form>
      </Container>
    </>
  );
}

export default ContactForm;
