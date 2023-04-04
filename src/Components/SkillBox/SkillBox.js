import React from 'react';
import { Box } from '@mui/material';

function SkillBox({children}) {
  return (
    <>
    <Box
    sx={{
        width:{lg:'160px',md:'140px',sm:'120px',xs:'120px'},
        height:{lg:'160px',md:'140px',sm:'120px',xs:'120px'},
        border:'3px solid #6600cc',
        rotate:'45deg',
        borderRadius:'30px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'20px'
    }}
    
    >
        <Box sx={{rotate:"-45deg"}}>
        {children}
        </Box>
    </Box>
    </>
  )
}

export default SkillBox