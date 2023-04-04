import React from 'react';
import {Divider } from '@mui/material';
function CustomDivider({...ohterProps}) {
  return (
    <>
    <Divider {...ohterProps} 
    style={{height:'3px',margin:'5px 0px 5px 0px'}}

    
    ></Divider>
    </>
  )
}

export default CustomDivider