import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomDivider from "../Divider/Divider";
import "../../App.css";
function Footer() {
  const Style = {
    backgroundColor: "#1D2331",
    marginTop: "100px",
    color: "white",
  };
  const FooterNav = {
    display: "inline-Block",
    margin: "0px 20px 0px 20px",
  };
  const listStyle = {
    listStyleType: "none",
    margin: "5px 0px 10px 0px",
    letterSpacing: "1px",
    textAlign: "justify",
  };

  const usefulLinks = {
    color:"white",
    textDecoration:'none',
    textAlign:'left'
    

  }

  return (
    <>
      <section style={Style}>
        <div
          id="socila-icon-container"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px 10px 20px",
            justifyContent: "space-between",
            backgroundColor: "#6600cc",
            minHeight: "70px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: { lg: "1.2em", md: "1.2em", sm: "1em", xs: "1em" },
                letterSpacing: "1px",
              }}
            >
              Get connected with me on social network
            </Typography>
          </Box>
          <Box>
            <nav>
              <ul>
                <li style={FooterNav}>
                  <a target='_blank' href="https://facebook.com">
                    <img
                      src="./Social Icons/facebook.png"
                      alt="facebook icon"
                    />
                  </a>
                </li>
                <li style={FooterNav}>
                  <a target='_blank' href="https://instagram.com">
                    <img
                      src="./Social Icons/instagram.png"
                      alt="instagram icon"
                    />
                  </a>
                </li>
                <li style={FooterNav}>
                  <a target='_blank' href="https://twitter.com">
                    <img src="./Social Icons/twitter.png" alt="twitter icon" />
                  </a>
                </li>
                <li style={FooterNav}>
                  <a target='_blank' href="https://linkedin.com">
                    <img
                      src="./Social Icons/linkedin.png"
                      alt="linkedin icon"
                    />
                  </a>
                </li>
                <li style={FooterNav}>
                  <a target='_blank' href="https://github.com">
                    <img src="./Social Icons/github.png" alt="github icon" />
                  </a>
                </li>
              </ul>
            </nav>
          </Box>
        </div>
        <center>
          <Box sx={{ marginTop: "40px", marginBottom:'30px'}}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "1.5em",
                      md: "1.5em",
                      sm: "1.2em",
                      xs: "1em",
                    },
                    fontWeight: 500,
                  }}
                >
                  Products
                </Typography>
                <CustomDivider
                  sx={{
                    backgroundColor: "#6600cc",
                    width: { lg: "100px", md: "90px", sm: "70px", xs: "60px" },
                  }}
                />
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "1.5em",
                      md: "1.5em",
                      sm: "1.2em",
                      xs: "1em",
                    },
                    fontWeight: 500,
                  }}
                >
                  Useful Links
                </Typography>
                <CustomDivider
                  sx={{
                    backgroundColor: "#6600cc",
                    width: { lg: "100px", md: "90px", sm: "70px", xs: "60px" },
                    
                  }}
                />
                <Box sx={{margin:'30px 0px 30px 30px',width:'28%',textAlign:'left'}}>
                <Typography sx={{fontSize:{lg:'1.2em', md:"1.2em",sm:"1em",xs:"0.9em"}}}> <a style={usefulLinks} href="#skill">Customer Reviews</a></Typography>
                <Typography sx={{fontSize:{lg:'1.2em', md:"1.2em",sm:"1em",xs:"0.9em"}}}><a style={usefulLinks} href="#home">Home</a></Typography>
                <Typography sx={{fontSize:{lg:'1.2em', md:"1.2em",sm:"1em",xs:"0.9em"}}}> <a style={usefulLinks} href="#contact">Contact</a></Typography>
                <Typography sx={{fontSize:{lg:'1.2em', md:"1.2em",sm:"1em",xs:"0.9em"}}}> <a style={usefulLinks} href="#skill">Skills Set</a></Typography>
                <Typography sx={{fontSize:{lg:'1.2em', md:"1.2em",sm:"1em",xs:"0.9em"}}}> <a style={usefulLinks} href="#skill">Projects</a></Typography>
                </Box>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                item
                lg={4}
                md={4}
                sm={4}
                xs={12}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "1.5em",
                      md: "1.5em",
                      sm: "1.2em",
                      xs: "1em",
                    },
                    fontWeight: 500,
                  }}
                >
                  Contact
                </Typography>
                <CustomDivider
                  sx={{
                    backgroundColor: "#6600cc",
                    width: { lg: "100px", md: "90px", sm: "70px", xs: "60px" },
                  }}
                />

                <center>
                  <Box sx={{ margin: "30px 0px 0px 50px" }}>
                    <Typography sx={{fontSize:{lg:'18px',md:'16px',sm:'14px',xs:'12px'}}} style={listStyle}>
                      {" "}
                      <img
                        src="./Social Icons/house.png"
                        alt="home icon"
                      />{" "}
                      Hyderabad Sindh Pakistan
                    </Typography>
                    <Typography sx={{fontSize:{lg:'18px',md:'16px',sm:'14px',xs:'12px'}}} style={listStyle}>
                      {" "}
                      <img
                        src="./Social Icons/email.png"
                        alt="email icon"
                      />{" "}
                      saqib.qumbrani@gmail.com
                    </Typography>
                    <Typography sx={{fontSize:{lg:'18px',md:'16px',sm:'14px',xs:'12px'}}} style={listStyle}>
                      {" "}
                      <img
                        src="./Social Icons/mobile.png"
                        alt="mobile icon"
                      />{" "}
                      +923463837369
                    </Typography>
                    <Typography sx={{fontSize:{lg:'18px',md:'16px',sm:'14px',xs:'12px'}}} style={listStyle}> <img src="./Social Icons/whatsapp.png" alt="whatsapp icon" /> +923463837369</Typography>
                  </Box>
                </center>
              </Grid>
            </Grid>
          </Box>
        </center>
        <div style={{backgroundColor:'#141B29',padding:'15px'}}>
          <Typography sx={{textAlign:'center',fontSize:{lg:'1.2em',md:'1.2em', sm:'1em',xs:'0.8em'}}}>Developed by Saqib Ali</Typography>

        </div>
      </section>
    </>
  );
}

export default Footer;
