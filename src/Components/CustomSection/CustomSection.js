import React from 'react';
import { Container } from '@mui/material';

function CustomSection({children,...otherProps}) {
  return (
    <>
    
    <Container {...otherProps} maxWidth="xl" >
        {children}

    </Container>
    
    </>
  )
}

export default CustomSection