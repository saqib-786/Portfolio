import React from 'react';
import { Box } from '@mui/system';

function ProjectBox({children,...otherProps}) {
  return (
    <>
    <Box
    sx={{
        border:"1px solid black",
        // margin:'20px',
        height:{lg:'250px',md:'200px',sm:'200px',xs:"200px"},
        width:{lg:'450px',md:'260px', sm:'230px'},
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:"10px",
        
    }}
    >
        {children}
    </Box>
    </>
  )
}

export default ProjectBox