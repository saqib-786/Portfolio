import React from 'react';
import { styled } from "@mui/material";
import { Typography } from "@mui/material";

const Title = styled(Typography)((theme)=>({
    fontFamily:theme.fontFamily,
    fontWeight:600,
    color: 'black',


}))


function H1Typo({children,...otherProps}) {
  return (
    <>
    <Title {...otherProps}>{children}</Title>
    </>
  )
}

export default H1Typo