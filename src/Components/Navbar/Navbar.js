import React from 'react';
import { Container,Box,Typography} from '@mui/material';
import '../../App.css';



function Navbar({title}) {
  return (
    <>
   
    <Container maxWidth="xl"
    sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        
    }}
    
    >
        <Box sx={{display:'flex', alignItems:'center'}}>
          <img className='load' width="60px" height="60px" src="./logo.png" />
            <Typography mx={2} sx={{fontWeight:{md:700,xs:600},fontSize:{lg:'32px',md:'32px',sm:'20px',xs:'20px'}}}>{title}</Typography>
        </Box>
        <Box>
          <nav>
            <ul>
              <li className='nav-item'><a href='#'>Home</a></li>
              <li className='nav-item'><a href='#'>Services</a></li>
              <li className='nav-item'><a href='#'>Projects</a></li>
              <li className='nav-item'><a href='#'>Contact</a></li>
            </ul>
          </nav>
        </Box>

    </Container>
    
    </>
  )
}

export default Navbar