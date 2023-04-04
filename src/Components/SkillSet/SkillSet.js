import {Box,Typography } from '@mui/material';
import React, { useState } from 'react';
import CustomText from '../CustomText/CustomText';
import CustomDivider from '../Divider/Divider';
import SkillBox from '../SkillBox/SkillBox';
import H1Typo from '../Typography/H1Typo';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material';
import 'animate.css';

const CustomGrid = styled(Grid)(()=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}))
const Title = styled(Typography)(()=>({
    fontSize:'18px',
    fontWeight:600,
    marginTop:"20px"
}))

function SkillSet() {
    // useState(()=>{
    //     let heading = document.querySelector('#heading')
    //   let observer = new IntersectionObserver((enteries)=>{
    //     enteries.forEach(item=>{
    //         if(item.isIntersecting === true){
    //             alert('working...')
    //         }
    //     })

    //   },{});

    //   observer.observe(heading)

    // },[])

  return (
    <>
    <div style={{backgroundColor:"whitesmoke",marginTop:'110px',padding:"20px"}}>
        <CustomText sx={{fontWeight:500,color:'#6600cc',textAlign:'center'}}>What am I Offering?</CustomText>
        <H1Typo id="heading" className='animate__animated animate__pulse' sx={{fontSize:{lg:'32px',md:'32px',sm:'24px',xs:'24px'},textAlign:'center'}}>My Skills Set</H1Typo>
        <center>
        <CustomDivider sx={{backgroundColor:"#6600cc",width:{lg:'100px',md:'100px',sm:"80px",xs:'70px'}}}/>

        </center>
        {/* Skills first row */}
        <Box sx={{
            marginTop:"20px",
            display:'flex',
            justifyContent:'space-between',
            padding:'10px'
            
            
            
            }}>
           
           <Grid sx={{marginTop:'50px'}} container spacing={2}>
                <CustomGrid className={onmouseover ? 'animate__animated animate__pulse' : null} lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                    <img className='logo' width="80px" height="80px" src="./logo.png" alt='React logo'/>
                </SkillBox>
                <Title>React JS</Title>
                </CustomGrid>

                <CustomGrid lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                    <img width="70px" height="70px" src='./Material-UI.png' alt="Material UI logo" />
                </SkillBox>
                <Title>Material UI</Title>
                </CustomGrid>

                <CustomGrid lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                    <img width='80px' height={"100px"} src='./firebase.png' alt="Firebase logo"/>
                </SkillBox>
                <Title>Firebase</Title>
                </CustomGrid>

                <CustomGrid lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                <img width='80px' height={"80px"} src='./Redux.png' alt="Redux logo"/>

                </SkillBox>
                <Title>Redux</Title>
                </CustomGrid>

            </Grid>
          
        </Box>
        {/* Skills second row */}

        <Box sx={{
            marginTop:"20px",
            display:'flex',
            justifyContent:'space-between',
            padding:'10px'
            
            
            
            }}>
           
           <Grid sx={{marginTop:'50px'}} container spacing={2}>
                <CustomGrid lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                    <img width={'120px'} height="80px" src="./Bootstrap.png" alt="Bootstrap logo"/>
                </SkillBox>
                <Title>Bootstrap</Title>
                </CustomGrid>

                <CustomGrid lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                <img className='logo' width="80px" height="80px" src="./logo.png" alt='React logo'/>
                </SkillBox>
                <Title>React Native</Title>
                </CustomGrid>

                <CustomGrid lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                    <img width={"100px"} height="80px" src='./Node.png' alt="Node.JS logo" />
                </SkillBox>
                <Title>Node JS</Title>
                </CustomGrid>

                <CustomGrid lg={3} md={3} sm={6} xs={12} item>
                <SkillBox>
                    <img width={'130px'} height="80px" src="./GitHub.png" alt='GIT Hub logo' />
                </SkillBox>
                <Title>GIT Hub</Title>
                </CustomGrid>

            </Grid>
          
        </Box>

    </div>
    </>
  )
}

export default SkillSet