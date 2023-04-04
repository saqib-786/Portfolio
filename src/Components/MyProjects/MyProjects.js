import React from "react";
import H1Typo from "../Typography/H1Typo";
import { Container, Box, Grid,} from "@mui/material";
import CustomDivider from "../Divider/Divider";
import ProjectBox from "../ProjectBox/ProjectBox";
import CustomButton from "../CustomButton/CustomButton";
import { useState, useEffect } from "react";
import CustomText from "../CustomText/CustomText";
import Backdrop from "../BackDrop/BackDrop";
import $ from "jquery";
// import "jquery-ui-dist/jquery-ui"

function MyProjects() {
  useEffect(()=>{
    $('#project-1').mouseenter(function(){
      $('.project-1').slideDown(1000).css('display','flex')
      // $('.project-1').css('display','flex');
      // $('.project-1').fadeIn('slow');
   })

   $('.project-1').mouseleave(function(){
    $(this).slideUp(1000);
    
    
    
  })

  $('#project-2').mouseenter(function(){
    $('.project-2').slideDown(1000).css('display','flex')
  })
      
  $('.project-2').mouseleave(function(){
    $(this).slideUp(1000)
  })

  $('.project').mouseleave(function(){
    $(this).slideUp(1000)
  })

  $('#project-3').mouseenter(function(){
    $('.project-3').slideDown(1000).css('display','flex')
  })
$('.project-3').mouseleave(function(){
  $(this).slideUp(1000)
})
$('#project-4').mouseenter(function(){
  $('.project-4').slideDown(1000).css('display','flex');
})

$('.project-4').mouseleave(function(){
  $(this).slideUp(1000)
})

$('#project-5').mouseenter(function(){
  $('.project-5').slideDown(1000).css('display','flex');

  $('.project-5').mouseleave(function(){
    $(this).slideUp(1000)
  })
})
  })

  const [isHidden, setIsHidden] = useState(false);
  
  const handleChange = (event) => {
    setIsHidden(true);
  };
const btnstyle={
  backgroundColor:'orange',
  padding:'10px',
  color:'white',
  marginTop:'20px',
  fontSize:'1em',
  letterSpacing:'1px'

}
  return (
    <>
      <Container
        sx={{ marginTop: "150px", display: "flex", flexDirection: "column" }}
        maxWidth="xl"
      >
        <CustomText sx={{ textAlign: "center", color: "#6600cc" }}>
          What I have done so far?{" "}
        </CustomText>
        <H1Typo
          sx={{
            fontSize: { lg: "32px", md: "32px", sm: "24px", xs: "24px" },
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          My Projects
        </H1Typo>
        <center>
          <CustomDivider
            sx={{
              backgroundColor: "#6600cc",
              width: { lg: "100px", md: "100px", sm: "80px", xs: "70px" },
            }}
          />
        </center>
        <Box
          sx={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
        >
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <ProjectBox>
                <img
                id="project-1"
                  style={{ borderRadius: "10px" }}
                  width={"100%"}
                  height="100%"
                  src="./Social Icons/Best Burger in Town.png"
                  alt="Best Burger"
                />

        
                  
                  <Backdrop className="project-1">
                    <h1 style={{ color: "white" }}>Footie Plus</h1>
                    <CustomButton style={btnstyle} variant={'contained'}>View Project</CustomButton>
                  </Backdrop>
                  
                
              </ProjectBox>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <ProjectBox>
                <img
                id="project-2"
                  style={{ borderRadius: "10px" }}
                  width={"100%"}
                  height="100%"
                  src="./Social Icons/Info-Tech.png"
                  alt="focus"
                />
               
                  <Backdrop className='project-2'>
                    <h1 style={{ color: "white" }}>Info Tech</h1>
                    <CustomButton style={btnstyle} variant={'contained'}>View Project</CustomButton>

                  </Backdrop>
               
              </ProjectBox>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <ProjectBox>
                <img
                id="project-3"
                  style={{ borderRadius: "10px" }}
                  width={"100%"}
                  height="100%"
                  src="./focus.jpg"
                  alt="focus"
                />
             
              <Backdrop className="project-3">
              <h1 style={{color:'white'}}>Best Burger in Town</h1>
              <CustomButton style={btnstyle} variant={'contained'}>View Project</CustomButton>

            </Backdrop>
            
              </ProjectBox>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            marginTop: { lg: "30px", md: "30px", sm: "20px", xs: "20px" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <ProjectBox>
                <img
                id="project-4"
                  style={{ borderRadius: "10px" }}
                  width={"100%"}
                  height="100%"
                  src="./focus.jpg"
                  alt="focus"
                />
                <Backdrop className='project-4'>
                    <h1 style={{ color: "white" }}>Info Tech</h1>
                    <CustomButton style={btnstyle} variant={'contained'}>View Project</CustomButton>

                  </Backdrop>
              </ProjectBox>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <ProjectBox>
                <img
                id="project-5"
                  style={{ borderRadius: "10px" }}
                  width={"100%"}
                  height="100%"
                  src="./focus.jpg"
                  alt="focus"
                />
                <Backdrop className='project-5'>
                    <h1 style={{ color: "white" }}>Info Tech</h1>
                    <CustomButton style={btnstyle} variant={'contained'}>View Project</CustomButton>

                  </Backdrop>
              </ProjectBox>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <ProjectBox>
                <img
                id="project-6"
                  style={{ borderRadius: "10px" }}
                  width={"100%"}
                  height="100%"
                  src="./focus.jpg"
                  alt="focus"
                />
                <Backdrop className='project-6'>
                    <h1 style={{ color: "white" }}>Info Tech</h1>
                    <CustomButton style={btnstyle} variant={'contained'}>View Project</CustomButton>

                  </Backdrop>
              </ProjectBox>
            </Grid>
          </Grid>
        </Box>
        {isHidden ? (
          <Box sx={{ marginTop: "30px" }}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <ProjectBox>
                  <img
                    style={{ borderRadius: "10px" }}
                    width={"100%"}
                    height="100%"
                    src="./focus.jpg"
                    alt="focus"
                  />
                </ProjectBox>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <ProjectBox>
                  <img
                    style={{ borderRadius: "10px" }}
                    width={"100%"}
                    height="100%"
                    src="./focus.jpg"
                    alt="focus"
                  />
                </ProjectBox>
              </Grid>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <ProjectBox>
                  <img
                    style={{ borderRadius: "10px" }}
                    width={"100%"}
                    height="100%"
                    src="./focus.jpg"
                    alt="focus"
                  />
                </ProjectBox>
              </Grid>
            </Grid>
          </Box>
        ) : null}

        {isHidden ? (
          <CustomButton
            sx={{
              width: { lg: "180px", md: "150px", sm: "120px" },
              margin: "50px auto 20px auto",
              borderRadius: "25px",
              height: "45px",
              padding: "20px",
            }}
            variant={"contained"}
          >
            View More
          </CustomButton>
        ) : (
          <CustomButton
            onClick={handleChange}
            sx={{
              width: { lg: "180px", md: "150px", sm: "150px" },
              margin: "50px auto 20px auto",
              borderRadius: "25px",
              height: "45px",
              padding: "20px",
            }}
            variant={"outlined"}
          >
            View More
          </CustomButton>
        )}
      </Container>
    </>
  );
}

export default MyProjects;
